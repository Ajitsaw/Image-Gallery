import React, { useEffect, useState } from "react";

// React Icons
import { MdCancelPresentation } from "react-icons/md";

//scss
import style from "./Search.module.scss";

// Debounce
import useDebounce from "../../Hooks/useDebounce";

// Reducers
import { getImages, searchImages } from "../../Features/Images/imageSlice";
import { useDispatch } from "react-redux";

function Search() {
    const [data, setData] = useState("");

    const dispatch = useDispatch();

    // Debounced value
    const devalue = useDebounce(data);

    // Call the api and Dispatch the posts
    useEffect(() => {
        if (devalue !== "") {
            dispatch(searchImages(devalue));
        } else {
            dispatch(getImages());
        }
    }, [devalue, dispatch]);

    return (
        <div className={style.searchbox}>
            <input
                type="text"
                name=""
                id=""
                placeholder="Search for an image"
                value={data}
                onChange={(e) => setData(e.target.value)}
            />
            {data && <MdCancelPresentation onClick={() => setData("")} />}
        </div>
    );
}

export default Search;
