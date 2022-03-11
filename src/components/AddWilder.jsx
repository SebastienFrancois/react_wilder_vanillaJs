import React, { useEffect, useState } from "react";
import { isEmpty } from "lodash";
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
// Utils
import { ROOT_API_URL } from "../utils/urls";

function AddWilder({ open, handleClose, fetchData }) {
  const [newWilder, setNewWilder] = useState({
    name: "",
    city: "",
    description: "",
  });
  const [error, setError] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleChange = (event) => {
    setNewWilder({ ...newWilder, [event.target.name]: event.target.value });
  };

  const resetInput = () => {
    setNewWilder({
      name: "",
      city: "",
      description: "",
    });
  };

  const onSubmit = async () => {
    try {
      const postedDatas = await axios.post(ROOT_API_URL, newWilder);
      resetInput();
      fetchData();
      handleClose();
    } catch (err) {
      if (error.response) {
        setError(error.response.data.message);
      } else {
        setError(error.message);
      }
    }
  };

  useEffect(() => {
    if (isEmpty(newWilder.name && newWilder.city && newWilder.description)) {
      return setSubmitDisabled(true);
    }
    setSubmitDisabled(false);
  }, [newWilder]);

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
              onSubmit={(e) => e.preventDefault()}
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
                <TextField
                  name="description"
                  id="outlined-disabled"
                  label="Description"
                  multiline
                  rows={4}
                  value={newWilder.description}
                  placeholder="Write a bit about yourself"
                  onChange={handleChange}
                />
              </div>
              {error ? <Typography variant="body2">{error}</Typography> : ""}
              <Button
                type="submit"
                onClick={onSubmit}
                disabled={submitDisabled}
              >
                Enregistrer
              </Button>
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
