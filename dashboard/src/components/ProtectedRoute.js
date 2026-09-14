import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:3002";
const LOGIN_URL = "http://localhost:3001/login";

function ProtectedRoute({ children }) {
  const [status, setStatus] = useState("checking"); // checking | ok | fail

  useEffect(() => {
    axios
      .get(`${API_URL}/checkAuth`, { withCredentials: true })
      .then((res) => {
        if (res.data.status) {
          setStatus("ok");
        } else {
          setStatus("fail");
        }
      })
      .catch(() => {
        setStatus("fail");
      });
  }, []);

  if (status === "checking") {
    return <p style={{ textAlign: "center", marginTop: "2rem" }}>Checking login...</p>;
  }

  if (status === "fail") {
    window.location.href = LOGIN_URL;
    return null;
  }

  return children;
}

export default ProtectedRoute;