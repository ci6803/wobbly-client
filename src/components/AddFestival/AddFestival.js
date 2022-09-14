import {uploadImage} from "../../api/service"
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const API_URL = "http://localhost:5005";


function AddFestival() {

    const navigate = useNavigate();

    const [festival, setFestival] = useState({
        name: '',
        image: '',
        description: '',
        type: '',
        startDate: '',
        endDate: ''
    })

   

    const handleFileUpload = (e) => {
        const uploadData = new FormData();

        uploadData.append('image', e.target.files[0])
        

        
        uploadImage(uploadData)
        .then(response => {
            setFestival({
                ...festival, image: response.fileUrl
            })
        })
        .catch(err => console.log("Error while uploading file: ", err))
    }
    const handleSubmit =  async (e) => {
        e.preventDefault();
        const storedToken = localStorage.getItem('authToken');
        await axios.post(`${API_URL}/api/festival`, festival, { headers: { Authorization: `Bearer ${storedToken}` } });
        navigate('/festival');
    }

    function handleChange(e) {
        const value = e.target.value;
        const name = e.target.name;
        setFestival({
            ...festival,
            [name]: value
        });
    }

    return (
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create an upcoming event
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
                <label>image:</label> 
                <input type="file" onChange={(e) => handleFileUpload(e)} />
                <br>
                </br>
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
                <label>Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={festival.startDate}
              onChange={handleChange}
            />
            <br></br>
            <label>End Date:</label>
            <input
              type="date"
              name="endDate"
              value={festival.endDate}
              onChange={handleChange}
            />
                <br></br>
            <button type="submit">Submit</button>
          </Box>
        </Box>
      </Container>
    </div>
    )
}

export default AddFestival;