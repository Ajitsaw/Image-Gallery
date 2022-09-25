import React from "react";
import { useSelector } from "react-redux";

// Component
import Image from "./Image";

// Bootstrap UI
import { Container, Row, Col } from "react-bootstrap";

//scss
import style from "./ImageBlock.module.scss";

function ImageBlock() {
    // Get Images Object from Store
    const images = useSelector((state) => state.allImages.images);
    const searchStatus = useSelector((state) => state.allImages.searchStatus);
    
    return (
        <div className={style.imageblock}>
            <Container>
                <Row>
                    {searchStatus === "loading" ? (
                        <Row className="justify-content-center">
                            <Col md="auto">
                                <div className={style.loader}>
                                    <img
                                        src="https://cdn.dribbble.com/userupload/2775721/file/original-e8c27e5d40d333d0c5c3b1d96597d08e.gif?compress=1&resize=752x"
                                        alt="loader"
                                    />
                                </div>
                            </Col>
                        </Row>
                    ) : images?.length === 0 ? (
                        <div className={style.error}>
                            <img
                                src="https://cdn.dribbble.com/users/1665077/screenshots/10738715/media/90712c2d7fd869e9d7586a108024d62c.gif"
                                alt="gif"
                            />
                            No image found
                        </div>
                    ) : (
                        images?.map((item) => (
                            <Image content={item} key={item.id} />
                        ))
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default ImageBlock;
