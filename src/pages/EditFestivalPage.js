import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:5005";

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
      .get(`${API_URL}/api/festival/${festivalId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
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
      .put(`${API_URL}/api/festival/${festivalId}`, requestBody,  { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => {
        navigate(`/festival/${festivalId}`);
      });
  };

  const deleteFestival = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/api/festival/${festivalId}`,  { headers: { Authorization: `Bearer ${storedToken}` } })
      .then(() => {
        navigate("/festival");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="EditFestivalPage">
      <h3>Edit the festival</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label>Type:</label>
        <input
          type="text"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />

        <label>Start date:</label>
        <input
          type="date"
          name="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label>End date:</label>
        <input
          type="date"
          name="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <button type="submit">Update festival</button>
      </form>

      <button onClick={deleteFestival}>Delete festival</button>
    </div>
  );
}

export default EditFestivalPage;
