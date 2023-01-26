import Image1 from "Assets/images/image-1.png";
import Image2 from "Assets/images/image-2.png";
import Image3 from "Assets/images/image-3.png";
import Image4 from "Assets/images/image-4.png";
import classNames from "classnames";
import { useCallback, useEffect, useState } from "react";

import "./Gallery.scss";

const images = [
    { id: 1, path: Image1 },
    { id: 2, path: Image2 },
    { id: 3, path: Image3 },
    { id: 4, path: Image4 },
    { id: 5, path: Image1 },
    { id: 6, path: Image2 },
    { id: 7, path: Image3 },
    { id: 8, path: Image4 },
]

const Gallery = () => {
    const [activeImage, setActiveImage] = useState(0);
    const [imageFullscreen, setImageFullscreen] = useState(false);

    useEffect(() => {
        setActiveImage(images[0].path);
    }, []);

    const handleChangeActiveImage = useCallback((image) => {
        setActiveImage(image);
    }, []);

    const handleShowFullscreenImage = () => {
        setImageFullscreen(true);
    };

    const handleCloseImageFullscreen = () => {
        setImageFullscreen(false);
    };

    return <>
        <div className="gallery">
            <ul className="gallery__scrollbar">
                {images.map(image => {
                    return <li key={image.id}
                        onClick={() => handleChangeActiveImage(image.path)}
                    >
                        <img src={image.path} alt="slide" />
                    </li>
                })}
            </ul>
            <div className="gallery__image-main" onClick={handleShowFullscreenImage}>
                <img src={activeImage} alt="slide-main" />

                <div className="scale-image">
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.885 21.1097L33.8047 28.0289C35.3978 29.623 35.3991 32.2087 33.8047 33.8035C32.2094 35.3981 29.6245 35.3975 28.0292 33.8035L21.1147 26.8886C22.2941 26.2082 23.3921 25.3688 24.3807 24.3801C25.3794 23.3814 26.2134 22.2798 26.885 21.1097Z" fill="white" />
                        <path d="M3.89998 3.89849C6.41414 1.38446 9.75768 0 13.3134 0C16.8694 0 20.2116 1.38517 22.7263 3.89969C27.9173 9.0906 27.9173 17.5361 22.7263 22.7265C20.2116 25.2417 16.8695 26.6267 13.3134 26.6267C9.75768 26.6267 6.41514 25.2416 3.9009 22.7271C1.38525 20.2133 3.8147e-06 16.8703 3.8147e-06 13.314C7.43866e-05 9.75754 1.38525 6.414 3.89998 3.89849ZM6.38107 20.2464C8.23327 22.0985 10.6951 23.1189 13.3135 23.1189C15.9319 23.1189 18.394 22.0986 20.2459 20.2464C24.0691 16.4234 24.0691 10.2028 20.2459 6.37979C18.394 4.52823 15.9319 3.50804 13.3135 3.50804C10.6941 3.50804 8.23228 4.52774 6.38015 6.3793C4.52781 8.23199 3.50825 10.6945 3.50825 13.314C3.50818 15.9328 4.52774 18.3948 6.38107 20.2464Z" fill="white" />
                        <path d="M8.80647 11.5594L11.5595 11.5596V8.8086C11.5595 7.83971 12.3448 7.05469 13.3132 7.05469C14.2815 7.05469 15.0673 7.83971 15.0673 8.8086V11.5599L17.8182 11.5601C18.7865 11.5601 19.5721 12.3456 19.5721 13.314C19.5721 14.2828 18.7865 15.0679 17.8182 15.0679L15.0673 15.0678V17.8187C15.0673 18.7877 14.2815 19.5728 13.3132 19.5728C12.3448 19.5728 11.5595 18.7877 11.5595 17.8187V15.0675L8.80647 15.0674C7.83808 15.0674 7.05228 14.2817 7.05228 13.3133C7.05235 12.3445 7.83808 11.5594 8.80647 11.5594Z" fill="white" />
                    </svg>
                </div>
            </div>
        </div>
        <div className={classNames("image-fullscreen", {
            "show": imageFullscreen
        })}>
            <div>
                <img src={activeImage} alt="fullscreen" />

                <svg
                    onClick={handleCloseImageFullscreen}
                    height="40" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="40">
                    <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
                </svg>
            </div>
        </div>
    </>
}

export default Gallery;