import React from "react";
import moment from "moment";
import history from "./../../common/history";
import "./card.css";

interface CardProps {
    tags: string;
    title: string;
    imageUrl: string;
    thumbNail: string;
    author: string;
    date: string;
}

const Card = (props: CardProps) => {
    const { date, author, imageUrl, tags, thumbNail } = props;
    const handleButtonClick = () => {
        history.push(`/image?url=${imageUrl}`);
    };

    return (
        <div className="card" data-testid="card-test">
            <img src={thumbNail} className="card_image" alt="Image_url" />
            <h3 className="card_author" data-testid="author">
                {author}
            </h3>
            <p> {moment(date).format("YYYY MM DD").toLocaleLowerCase()} </p>
            <p className="card_tags" data-testid="tags">
                {tags}
            </p>
            <div className="card_btn_wrapper">
                <button className="card_btn" onClick={handleButtonClick}>
                    Open
                </button>
            </div>
        </div>
    );
};

export default Card;
