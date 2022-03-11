// Libs
import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
// Components
import Skill from "./Skill";
// Mui
import { Card, CardContent, Grid, Typography, CardActions, IconButton } from "@mui/material";
import { Delete } from '@mui/icons-material';
// Assets
import profilePic from "../assets/ladyprofile.jpg";
// Utils
import { ROOT_API_URL } from "../utils/urls";

function WilderCard({ wilder, fetchData }) {
  const { name, description, skills, _id } = wilder;

  const handleDelete = async () => {
    try {
      await axios.delete(ROOT_API_URL+wilder._id);
      fetchData();
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Card sx={{ maxWidth: 250, ml: 2, p: 1, height: '100%' }}>
      <img src={profilePic} width="100%" />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" color="#F87A7A">
          {name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {description ||
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt aperiam maxime laborum amet impedit quam repudiandae sint iste! Quia saepe distinctio praesentium architecto dignissimos fugit doloremque consectetur optio error alias."}
        </Typography>
      </CardContent>
      <Typography variant="h7 " color={"#F87A7A"} sx={{ ml: 2 }}>
        Wild Skills
      </Typography>
      <Grid container spacing={1} justifyContent="start">
        {skills.length > 0
          ? skills.map((skill, i) => (
              <Grid item key={i}>
                <Skill skill={skill} id={_id} fetchData={fetchData} />
              </Grid>
            ))
          : ""}
      </Grid>
      <CardActions disableSpacing>
        <IconButton onClick={() => handleDelete()}>
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
}

WilderCard.propTypes = {
  wilder: PropTypes.object,
  fetchData: PropTypes.func,
};

export default WilderCard;
