import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
const API_URL = 'https://magenta-spider-cape.cyclic.app';

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

function EditFestivalPage(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const { festivalId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/festival/${festivalId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneFestival = response.data;
        setName(oneFestival.name);
        setDescription(oneFestival.description);
        setType(oneFestival.type);
        setStartDate(oneFestival.startDate);
        setEndDate(oneFestival.endDate);
        console.log(oneFestival);
      })
      .catch((error) => console.log(error.response));
  }, [festivalId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const requestBody = { name, description, type, startDate, endDate };
    const storedToken = localStorage.getItem("authToken");

    axios
      .put(`${API_URL}/api/festival/${festivalId}`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        navigate(`/festival/${festivalId}`);
      });
  };

  const deleteFestival = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/api/festival/${festivalId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        navigate("/festival");
      })
      .catch((err) => console.log(err));
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="EditFestivalPage">
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
              <BorderColorRoundedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Edit the festival
            </Typography>

            <Box
              component="form"
              onSubmit={handleFormSubmit}
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
                value={name}
                autoComplete="name"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                id="description"
                type="description"
                label="Description"
                name="description"
                value={description}
                autoComplete="description"
                autoFocus
                onChange={(e) => setDescription(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="type"
                type="type"
                label="Type"
                name="type"
                value={type}
                autoComplete="type"
                autoFocus
                onChange={(e) => setType(e.target.value)}
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
                value={startDate}
                autoComplete="startDate"
                autoFocus
                onChange={(e) => setStartDate(e.target.value)}
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
                value={endDate}
                autoComplete="endDate"
                autoFocus
                onChange={(e) => setEndDate(e.target.value)}
              />
              <br></br>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Update festival
              </Button>

              {/* <Button
                onClick={deleteFestival}
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
              >
                Delete festival
              </Button> */}
              <Button
                variant="outlined"
                onClick={deleteFestival}
                sx={{ ml: 11, mt: 2 }}
                startIcon={<DeleteRoundedIcon />}
              >
                Delete the festival
              </Button>

              {/* <button onClick={deleteFestival}>Delete festival</button> */}
            </Box>
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default EditFestivalPage;
