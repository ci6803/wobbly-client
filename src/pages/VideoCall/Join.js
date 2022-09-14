import React from 'react'
import { useState } from 'react';
import './Join.css';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Join() {

    const [room, setRoom] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.assign(`/meeting/${room}`)
    }

  return (
    <div className='Join'>
        <p>.</p>
        <p></p>
        <Typography 
            component="h1" variant="h2"
            sx={{marginTop: 20}}
        >
              Chat Rooms
        </Typography>
        <p>Popular Rooms: 'festi-chat', 'chilling'</p>
        <div className='Rooms'>
            <TextField
                name="room"
                id="room"
                label="room"
                autoFocus
                onChange={(e) => setRoom(e.target.value)}
            />
            <Button className='room-button'
                sx={{background: 'black', color: 'white'}}
                variant="contained"
                onClick={handleSubmit}
            >
                Join Room
            </Button>
        </div>
    </div>
  )
}

export default Join