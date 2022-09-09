import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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

    
    const handleSubmit =  async (e) => {
        e.preventDefault();
        await axios.post(`${API_URL}/api/festival`, festival);
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
            <h2>List an Upcoming Festival</h2>

            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type='text' name='name' value={festival.name} onChange={handleChange}/>
                <label>image:</label> 
                <input type='text' name='image' value={festival.image} onChange={handleChange}/>
                <label>description:</label>
                <input type='text' name='description' value={festival.description} onChange={handleChange}/>
                <label>type:</label>
                <input type='text' name='type' value={festival.type} onChange={handleChange}/>
                <label>Start Date:</label>
                <input type='date' name='startDate' value={festival.startDate} onChange={handleChange}/>
                <label>End Date:</label>
                <input type='date' name='endDate' value={festival.endDate} onChange={handleChange}/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddFestival;