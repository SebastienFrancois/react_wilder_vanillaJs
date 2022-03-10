import React, { useState, useEffect } from "react";
// Libs
import { PropTypes } from "prop-types";
// Component
import WilderCard from "./WilderCard";
// Mui
import { Typography, Box, Grid, Button } from "@mui/material";

function CardsList({ handleOpen, fetchData, wilders, isLoading, error }) {


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, pr: "20%", pl: "20%", mb: "10%" }}>
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", marginBottom: "inherit" }}
        component="div"
        mt={2}
      >
        Wilders
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3, mt: 2 }}
        sx={{ flexGrow: 1 }}
        justifyContent="center"
      >
        {isLoading ? (
          <Typography variant="body2">Loading ...</Typography>
        ) : (
          wilders.map((wilder, i) => (
            <Grid item xs={12} sm={8} md={6} lg={4} key={i}>
              <WilderCard wilder={wilder} />
            </Grid>
          ))
        )}
      </Grid>
      <Box mt={3} fullWidth sx={{ textAlign: "center" }}>
        {error ? <Typography variant="body2">{error}</Typography> : ""}
        <Button variant="outlined" color="primary" onClick={fetchData}>
          Reload
        </Button>
      </Box>
      <Box mt={3} fullWidth sx={{ textAlign: "center" }}>
        {error ? <Typography variant="body2">{error}</Typography> : ""}
        <Button variant="outlined" color="primary" onClick={handleOpen}>
          Add
        </Button>
      </Box>
    </Box>
  );
}

export default CardsList;

CardsList.propTypes = {
    handleOpen : PropTypes.func,
    fetchData : PropTypes.func,
    wilders: PropTypes.array,
    isLoading: PropTypes.bool,
    error: PropTypes.string,
}