import React, { useState } from 'react';
import classes from './Modal.module.css';

const Modal = ({ closeModal, createSport }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [players, setPlayers] = useState();
    const [categories, setCategories] = useState([]);
    const [newSport, setNewSport] = useState({
        title: "",
        description: "",
        players: 0,
        categories: [],
    });

    const handleSubmit = (e) => {
        console.log("submit");
        e.preventDefault();
        createSport({ title, description, players, categories });
        setNewSport({ title: "", description: "", players: 0, categories: [] });
        closeModal();
    };

    return (
        <div className={`modal is-active ${classes.overlay}`}>
            <div className="modal-background" onClick={closeModal}></div>
            <div className={`modal-content`}>
                <div className={`box ${classes['crear-editar']}`}>
                    <p className="subtitle is-4">New Sport</p>
                    <form onSubmit={handleSubmit}>
                        <div className={`field ${classes.titleInput}`}>
                            <label className="label">Name</label>
                            <div className="control">
                                <input id="sport-title" className="input" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                            </div>
                        </div>
                        <div className={`field ${classes.titleInput}`}>
                            <label className="label">Description</label>
                            <div className="control">
                                <textarea id="sport-description" className="textarea" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                            </div>
                        </div>
                        <div className={`field ${classes.titleInput}`}>
                            <label className="label">Players</label>
                            <div className="control">
                                <input id="sport-players" className="number" placeholder="Number of Players" value={players} onChange={(e) => setPlayers(e.target.value)} required type="number"/>
                            </div>
                        </div>
                        <div className={`field ${classes.titleInput}`}>
                            <label className="label">Categories</label>
                            <div className="control">
                                <textarea id="sport-categories" className="text" placeholder="Categories" value={categories} onChange={(e) => setCategories(e.target.value)} required />
                            </div>
                        </div>

                        <div className={`field is-grouped ${classes.buttons}`}>
                            <div className="control">
                                <button type="button" className={`button is-danger ${classes['boton-aceptar-cancelar']} ${classes.botonCancelar}`} onClick={closeModal}>Cancel</button>
                            </div>
                            <div className="control">
                                <button type="submit" className={`button is-success ${classes['boton-aceptar-cancelar']}`}>Accept</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;