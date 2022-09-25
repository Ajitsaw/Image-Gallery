import React, { useState } from "react";

// Bootstrap UI
import { Container, Row, Col } from "react-bootstrap";

// React Icons
import { BsFilterRight } from "react-icons/bs";
import { CgClose, CgSearch } from "react-icons/cg";

// Style scss
import style from "./Header.module.scss";

// Dropdown
import Dropdown from "../../UI/Dropdown/Dropdown";

// Search Component
import Search from "../../UI/Search/Search";

function Header() {
    const [dropdown, setDropdown] = useState(false);

    // Search State For Mobile Devices
    const [search, setSearch] = useState(false);

    return (
        <header>
            <Container>
                <Row className="justify-content-between align-items-center">
                    <Col lg="3" xs="8">
                        <div className={style.logo}>
                            <span>Aj's Gallery</span>
                        </div>
                    </Col>
                    <Col lg="6" className="d-lg-block d-none">
                        <Search />
                    </Col>
                    <Col lg="3" xs="4">
                        <div className={style.right}>
                            {/* Mobile Only */}
                            <div className={style.searchBox}>
                                <div onClick={() => setSearch((prev) => !prev)}>
                                    {search ? <CgClose /> : <CgSearch />}
                                </div>
                                <div
                                    className={`${style.searchBox__holder} ${
                                        search && style.active
                                    }`}
                                >
                                    <Search />
                                </div>
                            </div>
                            {/* Mobile Only */}
                            <div
                                className={style.icon}
                                onClick={() => setDropdown((prev) => !prev)}
                            >
                                {dropdown ? <CgClose /> : <BsFilterRight />}
                            </div>
                            {dropdown && <Dropdown />}
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;
