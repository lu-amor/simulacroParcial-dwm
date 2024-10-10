import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import SportDetailPage from "./pages/sportDetailPage/detail.jsx";
import HomePage from "./pages/homePage/home.jsx";
import React, { useState, useEffect } from "react";

function App() {
  const [sports, setSports] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const url = "http://localhost:3000/sports";

  useEffect(() => {
    getSports();
  }, []);

  async function fetchSports() {
    try {
      const response = await fetch(url, { method: "GET" });
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error fetching data: ", error);
    }
  }

  const getSports = () => {
    fetchSports().then((incomingSport) => {
      setSports(incomingSport);
    });
  };

  const addSport = async (newSport) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newSport),
      });

      if (response.ok) {
        const savedSport = await response.json();
        return savedSport;
      } else {
        console.log("Error saving sport: ", response.statusText);
      }
    } catch (error) {
      console.log("Error saving sport: ", error);
    }
  };

  const createSport = (newSport) => {
    addSport(newSport).then((savedSport) => {
      setSports([...sports, savedSport]);
    });
  };

  const deleteSport = async (id) => {
    try {
      const response = await fetch(`${url}/${id}`, { method: "DELETE" });
      if (response.ok) {
        const updatedSports = sports.filter((sport) => sport.id !== id);
        setSports(updatedSports);
        closeModal();
      } else {
        console.log("Error deleting sport: ", response.statusText);
      }
    } catch (error) {
      console.log("Error deleting sport: ", error);
    }
  };

  const removeSport = (id) => {
    deleteSport(id).then(() => {
      setSports(sports.filter((sport) => sport.id !== id));
    });
  };

  return (
    <>
      <Routes>
        <Route path="/*" element={<Navigate replace to="/home" />} />
        <Route
          path="/home/*"
          element={
            <HomePage
              sports={sports}
              createSport={createSport}
              removeSport={removeSport}
            />
          }
        />
        <Route path="/home/:sportId" element={<SportDetailPage sports={sports}/>} />
      </Routes>
    </>
  );
}

export default App;
