import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
// Mui
import {
  Button,
  Modal,
  Fade,
  Box,
  Typography,
  Backdrop,
  TextField,
} from "@mui/material";
import axios from "axios";
import { isEmpty } from "lodash";

function AddWilder({ open, handleClose, fetchData }) {
  const [newWilder, setNewWilder] = useState({
    name: "",
    city: "",
  });
  const [error, setError] = useState('');
  const handleChange = (event) => {
    setNewWilder({ ...newWilder, [event.target.name]: event.target.value });
  };
 
  const onSubmit = async () => {
    try{
      await axios.post('http://localhost:5000/api/wilder/', newWilder)
      fetchData()
      handleClose()
    } catch(err) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }
    }
  }

  // useEffect(() => {
  //   if(isEmpty(newWilder.name ||new))
  // },[newWilder])

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 24,
              border: "none",
              p: 4,
              borderRadius: 5,
            }}
            >
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              onSubmit={e => e.preventDefault()}
            >
              <div>
                <TextField
                  name="name"
                  required
                  id="outlined-required"
                  label="Name"
                  value={newWilder.name}
                  placeholder="Your name"
                  onChange={handleChange}
                />
                <TextField
                  name="city"
                  id="outlined-disabled"
                  label="City"
                  value={newWilder.city}
                  placeholder="London"
                  onChange={handleChange}
                />
              </div>
              {error ? <Typography variant="body2">{error}</Typography> : ""}
              <Button type='submit' onClick={onSubmit}>Enregistrer</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default AddWilder;

AddWilder.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  handleOpen: PropTypes.func,
  fetchData: PropTypes.func,
};
