import React, { useState, useEffect } from "react";
import axios from "axios";
// Components
import Header from "./components/Header";
import CardsList from "./components/CardsList";
import AddWilder from "./components/AddWilder";
// Mui
import { CssBaseline } from "@mui/material";

function App() {
  const [open, setOpen] = React.useState(false);
  const [wilders, setWilders] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const url = "http://localhost:5000/api/wilder/";

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data = await axios.get(url);
      setError("");
      setWilders(data.data);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <CssBaseline enableColorScheme />
      <Header />
      <CardsList handleOpen={handleOpen} fetchData={fetchData} wilders={wilders} error={error} />
      <AddWilder
        open={open}
        handleClose={handleClose}
        fetchData={fetchData}
      />
    </div>
  );
}

export default App;
