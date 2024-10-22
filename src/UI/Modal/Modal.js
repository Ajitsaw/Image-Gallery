import React from "react";
import { useDispatch, useSelector } from "react-redux";

// scss
import style from "./Modal.module.scss";

// React Icon
import {
    AiOutlineClose,
    AiOutlineLike,
    AiOutlineEye,
    AiOutlineComment,
    AiOutlineCloudDownload,
} from "react-icons/ai";

import { removeModal } from "../../Features/Images/imageSlice";

function Modal() {
    const dispatch = useDispatch();

    // Get Images Object from Store
    const modalContent = useSelector((state) => state.allImages.modalContent);
    const isModal = useSelector((state) => state.allImages.isModal);

    return (
        <div className={`${style.modal} ${isModal && style.active}`}>
            <div
                className={style.shade}
                onClick={() => dispatch(removeModal())}
            ></div>
            <div className={style.content}>
                <div className={style.image}>
                    <img
                        src={modalContent.largeImageURL}
                        alt={modalContent.id}
                    />
                    <div
                        className={style.close}
                        onClick={() => dispatch(removeModal())}
                    >
                        <AiOutlineClose />
                    </div>
                </div>
                <div className={style.text}>
                    <div className={style.user}>
                        <div className={style.img}>
                            <img
                                src={modalContent.userImageURL}
                                alt={modalContent.user}
                            />
                        </div>
                        <p>
                            {modalContent.user} <i>|</i>
                            <span>ID: {modalContent.user_id}</span>
                        </p>
                    </div>
                    <h3>{modalContent.tags}</h3>
                    <div className={style.stats}>
                        <span>
                            <AiOutlineLike /> {modalContent.likes}
                        </span>
                        <span>
                            <AiOutlineCloudDownload /> {modalContent.downloads}
                        </span>
                        <span>
                            <AiOutlineComment /> {modalContent.comments}
                        </span>
                        <span>
                            <AiOutlineEye /> {modalContent.views}
                        </span>
                    </div>
                    <a href={modalContent.webformatURL} target='_blank' rel="noreferrer" className="button">Visit</a>
                </div>
            </div>
        </div>
    );
}

export default Modal;
