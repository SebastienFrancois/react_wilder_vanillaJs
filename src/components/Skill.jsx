// Libs
import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
// Mui
import { Chip, Avatar } from "@mui/material";
// Utils
import { ROOT_API_URL } from "../utils/urls";

function Skill({ skill, id }) {
  const { title, votes } = skill;

  const [vote, setVote] = useState(votes);

  const voteForSkill = async () => {
    try {
      await axios.put(ROOT_API_URL+id, {skills: [{title: title, votes: vote + 1 }]});
      setVote(vote + 1) 
    } catch (err) {
      setVote(votes);
      console.error(err);
    }
  };

  return (
    <Chip
      sx={{
        flexDirection: "row-reverse",
        padding: "10px",
        backgroundColor: "#fff",
        border: "2px solid #F87A7A",
        borderRadius: "10px",
      }}
      label={title || "HTML"}
      avatar={<Avatar>{vote || 0}</Avatar>}
      onClick={voteForSkill}
    />
  );
}

export default Skill;

Skill.propTypes = {
  skill: PropTypes.object,
  title: PropTypes.string,
  votes: PropTypes.number,
  id: PropTypes.string,
};
