import React from "react";
import classes from "./detail.module.css";
import { useNavigate, useParams } from "react-router-dom";

const SportDetailPage = ({sports}) => {
    const navigate = useNavigate();
    const { sportId } = useParams();

    const goBack = () => {
        navigate("/home");
    }

    const sport = sports.find((sport) => sport.id === sportId);

    return (
        <div>
        <button onClick={goBack} className={`${classes.goBack}`}>&lt; Back</button>
        <h1 className={`${classes.title}`}>{sport.title}</h1>
        <p className={`${classes.text}`}>Description: {sport.description}</p>
        <p className={`${classes.text}`}>N° of players: {sport.players}</p>
        <p className={`${classes.text}`}>Categories: {sport.categories}</p>
        </div>
    );
};

export default SportDetailPage;