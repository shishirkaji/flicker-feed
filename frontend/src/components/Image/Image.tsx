import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Spinner from "../Spinner/Spinner";
import "./image.css";

const Image = () => {
    const [imageUrl, setImageUrl] = useState<string>();

    const search = useLocation().search;
    const _imageUrl = new URLSearchParams(search).get("imageUrl");

    useEffect(() => {
        console.log(_imageUrl);
        if (_imageUrl) {
            setImageUrl(_imageUrl);
        }
    }, []);

    return (
        <div className="image_page">
            {!imageUrl ? (
                <Spinner />
            ) : (
                <img src={imageUrl} alt={imageUrl} width="360" height="240" />
            )}
        </div>
    );
};

export default Image;
