import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    images: [],
    modalContent: {},
    isModal: false,
    status: "idle",
    searchStatus: "idle",
    error: null,
};

const url = "https://pixabay.com/api/?key=30160474-34cc02c946fce0ccaff738012";

export const getImages = createAsyncThunk("images/fetch", async () => {
    try {
        const res = await axios.get(url);
        return res.data.hits;
    } catch (err) {
        return err.message;
    }
});

export const searchImages = createAsyncThunk(
    "images/search",
    async (getValue) => {
        try {
            const res = await axios.get(url);
            const filtered = res.data.hits.filter((item) => {
                return (
                    item?.tags
                        ?.toLowerCase()
                        .includes(getValue.toLowerCase()) ||
                    item?.type
                        ?.toLowerCase()
                        .includes(getValue.toLowerCase()) ||
                    item?.user?.toLowerCase().includes(getValue.toLowerCase())
                );
            });
            return filtered;
        } catch (err) {
            return err.message;
        }
    }
);

const imageSlice = createSlice({
    name: "images",
    initialState,
    reducers: {
        sort: (state, action) => {
            if (action.payload === "view") {
                state.images.sort((a, b) => b.views - a.views);
            } else if (action.payload === "size") {
                state.images.sort((a, b) => b.imageSize - a.imageSize);
            }
        },
        setModal: (state, action) => {
            state.modalContent = { ...action.payload };
            state.isModal = true;
        },
        removeModal: (state) => {
            state.modalContent = {};
            state.isModal = false;
        },
    },
    extraReducers(builder) {
        builder.addCase(getImages.pending, (state, action) => {
            state.searchStatus = "loading";
        });
        builder.addCase(getImages.fulfilled, (state, action) => {
            state.searchStatus = "idle";
            state.images = action.payload;
        });
        builder.addCase(getImages.rejected, (state, action) => {
            state.searchStatus = "failed";
            state.error = action.error.message;
        });
        builder.addCase(searchImages.pending, (state, action) => {
            state.searchStatus = "loading";
        });
        builder.addCase(searchImages.fulfilled, (state, action) => {
            state.searchStatus = "idle";
            state.images = action.payload;
        });
        builder.addCase(searchImages.rejected, (state, action) => {
            state.searchStatus = "failed";
            state.error = action.error.message;
        });
    },
});
export const { sort, setModal, removeModal } = imageSlice.actions;

export default imageSlice.reducer;
