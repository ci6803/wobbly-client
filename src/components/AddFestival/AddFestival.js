import "../../App.css";
import { uploadImage } from "../../api/service";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PostAddRoundedIcon from "@mui/icons-material/PostAddRounded";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
const API_URL = "http://localhost:5005";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3F72AF",
    },
    secondary: {
      main: "#DBE2EF",
    },
    info: {
      main: "#112D4E",
    },
    success: {
      main: "#F9F7F7",
    },
  },
});

function AddFestival() {
  const navigate = useNavigate();

  const [festival, setFestival] = useState({
    name: "",
    image: "",
    description: "",
    type: "",
    startDate: "",
    endDate: "",
  });

  const handleFileUpload = (e) => {
    const uploadData = new FormData();

    uploadData.append("image", e.target.files[0]);

    uploadImage(uploadData)
      .then((response) => {
        setFestival({
          ...festival,
          image: response.fileUrl,
        });
      })
      .catch((err) => console.log("Error while uploading file: ", err));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("authToken");
    await axios.post(`${API_URL}/api/festival`, festival, {
      headers: { Authorization: `Bearer ${storedToken}` },
    });
    navigate("/festival");
  };

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setFestival({
      ...festival,
      [name]: value,
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="AddFestival">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <PostAddRoundedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create an upcoming festival
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                type="name"
                label="Name:"
                name="name"
                value={festival.name}
                autoComplete="name"
                autoFocus
                onChange={handleChange}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="description"
                type="description"
                label="Description"
                name="description"
                value={festival.description}
                autoComplete="description"
                autoFocus
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="type"
                type="type"
                label="Type"
                name="type"
                value={festival.type}
                autoComplete="type"
                autoFocus
                onChange={handleChange}
              />
              <br></br>
              <label>Start Date:</label>
              <TextField
                margin="normal"
                required
                fullWidth
                id="startDate"
                type="date"
                name="startDate"
                value={festival.startDate}
                autoComplete="startDate"
                autoFocus
                onChange={handleChange}
              />
              <br></br>
              <label>End Date:</label>
              <TextField
                margin="normal"
                required
                fullWidth
                id="endDate"
                type="date"
                name="endDate"
                value={festival.endDate}
                autoComplete="endDate"
                autoFocus
                onChange={handleChange}
              />
              <br></br>
              {/* <label>Image: </label>
              <input type="file" onChange={(e) => handleFileUpload(e)} /> */}

              <Button variant="outlined" component="label">
                upload Image
                <input
                  hidden
                  accept="image/*"
                  multiple
                  type="file"
                  onChange={(e) => handleFileUpload(e)}
                />
              </Button>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
              >
                <input hidden accept="image/*" type="file" />
                <CameraAltIcon />
              </IconButton>

              <br></br>
              <br></br>

              <Button
                type="submit"
                size="small"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default AddFestival;
