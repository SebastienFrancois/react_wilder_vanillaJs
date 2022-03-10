// Libs
import React from "react";
import PropTypes from "prop-types";
// Mui
import { Chip, Avatar } from "@mui/material";

function Skill({ skill }) {
  const { title, votes } = skill;
  const voteForSkill = async () => {
    
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
      avatar={<Avatar>{votes || 0}</Avatar>}
      onClick={voteForSkill}
    />
  );
}

export default Skill;

Skill.propTypes = {
  skill: PropTypes.object,
  title: PropTypes.string,
  votes: PropTypes.number,
};
