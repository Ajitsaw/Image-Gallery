import React from "react";
import { useDispatch } from "react-redux";

// Bootstrap UI
import { Col } from "react-bootstrap";

// React Icons
import { AiOutlineEye } from "react-icons/ai";
import { IoIosExpand } from "react-icons/io";

// Modal Action
import { setModal } from "./imageSlice";

//scss
import style from "./ImageBlock.module.scss";

function Image({ content }) {
    const dispatch = useDispatch();

    return (
        <Col lg="3" md="4" sm="6" className={style.marg}>
            <div className={style.single}>
                <div className={style.image}>
                    <img src={content.largeImageURL} alt={content.user_id} />
                    <div className={style.view}>
                        <AiOutlineEye />
                        {content.views}
                    </div>
                    <div className={style.hover}>
                        <div
                            className={style.button}
                            onClick={() => dispatch(setModal(content))}
                        >
                            <IoIosExpand />
                        </div>
                    </div>
                </div>
                <div className={style.text}>
                    <p>{content.tags}</p>
                    <span>Size: {content.imageSize}</span>
                </div>
            </div>
        </Col>
    );
}

export default Image;
