import React from "react";
import Alert from "@mui/material/Alert";
import "../App.css";

function ErrorPage() {
  return (
    <div className="error-page">
      <Alert variant="filled" severity="error" sx={{ mt: 10 }}>
        This page does not exist — 404
      </Alert>

      <img
        className="error-img"
        src="https://media.giphy.com/media/l4pSWfjA3jkBLbXzy/giphy.gif"
        alt="error"
      />
    </div>
  );
}

export default ErrorPage;
