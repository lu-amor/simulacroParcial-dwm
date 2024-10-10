import React, { useState } from "react";
import classes from "./home.module.css";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card/card.jsx";
import Modal from "../../components/modal/modal.jsx";

const HomePage = ({ sports, createSport, removeSport }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const mapSports = (sportsArray) => {
        if (!Array.isArray(sportsArray) || sportsArray.length === 0) {
        return <p>No sports available</p>;
        }

        return sportsArray.map((sport) => (
        <Card
            key={sport.id}
            sport={sport}
            onClickDetails={() => navigate(`/sports/${sport.id}`)}
            onClickDelete={() => removeSport(sport.id)}
        />
        ));
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <h1 className={`${classes.title}`}>Juegos olímpicos 2024</h1>
            <div className={classes.buttonContainer}>
                <button className={`${classes.sportButton}`} onClick={() => openModal()}>Add Sport</button>
            </div>
            <div className={classes.cardContainer}>{mapSports(sports)}</div>
            {isModalOpen && (
                <Modal closeModal={closeModal} createSport={createSport}/>
            )}
        </div>
    );
};

export default HomePage;
