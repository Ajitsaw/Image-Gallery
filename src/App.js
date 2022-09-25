// Components
import Header from "./Components/Header/Header";
import ImageBlock from "./Features/Images/ImageBlock";

// Modal
import Modal from "./UI/Modal/Modal";

import "./App.scss";
import { useSelector } from "react-redux";

function App() {
    const isModal = useSelector((state) => state.allImages.isModal);

    return (
        <>
            <Header />
            <ImageBlock />
            {isModal && <Modal />}
        </>
    );
}

export default App;
