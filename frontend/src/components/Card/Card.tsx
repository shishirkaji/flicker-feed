import React from "react";
import history from "./../../common/history";
import "./card.css";
interface CardProps {
    tags: string;
    title: string;
    imageUrl: string;
    thumbNail: string;
}
const Card = (props: CardProps) => {
    const { title, imageUrl, tags, thumbNail } = props;
    const handleButtonClick = () => {
        history.push(`/image?url=${imageUrl}`);
    };

    return (
        <div className="card" data-testid="card-test">
            <img src={thumbNail} className="card_image" alt="asdf" />
            <h3 className="card_title"> {title}</h3>
            <p className="card_tags" data-testid="tags" >{tags}</p>
            <div className="card_btn_wrapper">
                <button className="card_btn" onClick={handleButtonClick}>
                    Open
                </button>
            </div>
        </div>
    );
};

export default Card;
