import React from "react";
import classes from "./card.module.css";
import { useNavigate } from "react-router-dom";

const Card = ({ sport, onClickDelete }) => {
    const navigate = useNavigate();

    const onClickDetails = () => {
        navigate(`/home/${sport.id}`);
    };

    return (
        <div className={classes.card}>
            <h2 className={classes.title}>{sport.title}</h2>
            <button className={classes.details} onClick={onClickDetails}>Details</button>
            <button className={classes.delete} onClick={onClickDelete}>Delete</button>
        </div>
    );
};

export default Card;