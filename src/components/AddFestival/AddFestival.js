import {uploadImage} from "../../api/service"
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
            <h2>Create an Upcoming Festival</h2>
            <hr></hr>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type='text' name='name' value={festival.name} onChange={handleChange}/>
                <br>
                </br>
                <label>image:</label> 
                <input type="file" onChange={(e) => handleFileUpload(e)} />
                <br>
                </br>
                <label>description:</label>
                <input type='text' name='description' value={festival.description} onChange={handleChange}/>
                <br>
                </br>
                <label>type:</label>
                <input type='text' name='type' value={festival.type} onChange={handleChange}/>
                <br>
                </br>
                <label>Start Date:</label>
                <input type='date' name='startDate' value={festival.startDate} onChange={handleChange}/>
                <label>End Date:</label>
                <input type='date' name='endDate' value={festival.endDate} onChange={handleChange}/>
                <br>
                </br>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default AddFestival;