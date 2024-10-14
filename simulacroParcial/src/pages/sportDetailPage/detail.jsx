import React, {useState, useEffect} from "react";
import classes from "./detail.module.css";
import { useNavigate, useParams } from "react-router-dom";

const SportDetailPage = () => {
    const [sport, setSport] = useState(null);
    const navigate = useNavigate();
    const { sportId } = useParams();
    const goBack = () => {
        navigate("/home");
    }

    async function fetchSport() {
        try {
            const response = await fetch("http://localhost:3000/sports" + `/${sportId}`, { method: "GET" });
            const data = await response.json();
            return data;
        } catch (error) {
            console.log("Error fetching data: ", error);
        }
    }

    useEffect(() => {
        let promise = fetchSport();
        promise.then((incomingSport) => {
            setSport(incomingSport);
        });
    }, []);

    return (
        <div>
            <button onClick={goBack} className={`${classes.goBack}`}>&lt; Back</button>
            {sport ? (
                <>
                    <h1 className={`${classes.title}`}>{sport.title}</h1>
                    <p className={`${classes.text}`}>Description: {sport.description}</p>
                    <p className={`${classes.text}`}>N° of players: {sport.players}</p>
                    <p className={`${classes.text}`}>Categories: {sport.categories}</p>
                </>
            ) : (
                <p>Loading sport details...</p>
            )}
        </div>
    );    
};

export default SportDetailPage;