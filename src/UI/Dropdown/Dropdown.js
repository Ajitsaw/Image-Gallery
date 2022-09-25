import React from "react";
import { useDispatch } from "react-redux";

// Sort Action
import { sort } from "../../Features/Images/imageSlice";

//scss
import style from "./Dropdown.module.scss";

function Dropdown() {
    const dispatch = useDispatch();

    const handelChange = (e) => {
        dispatch(sort(e.target.value));
    };

    return (
        <div className={style.dropdown}>
            <div className={style.radio}>
                <input
                    type="radio"
                    name="radio"
                    id=""
                    value="view"
                    onChange={handelChange}
                />
                <div></div>
                Sort By number of Views
            </div>
            <div className={style.radio}>
                <input
                    type="radio"
                    name="radio"
                    id=""
                    value="size"
                    onChange={handelChange}
                />
                <div></div>
                Sort By image Size
            </div>
        </div>
    );
}

export default Dropdown;
