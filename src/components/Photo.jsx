import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
var jsonQuery = require("json-query");

const Photo = ({ match }) => {
  const getData = async () => {
    let cli = "Client-ID ";
    let pass = process.env.REACT_APP_CLIENT;
    let auth = cli + pass;
    let response = await fetch(
      `https://api.unsplash.com/photos/${match.params.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
      }
    );
    const apiData = await response.json();
    setData(apiData);
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className="photo-container">
        <div className="image-main-div">
          <img
            className="image-main"
            src={jsonQuery("urls.full", { data: data }).value}
            alt={jsonQuery("alt_description", { data: data }).value}
          />
          <p>
            Image uploaded by{" "}
            <a
              href={jsonQuery("user.links.html", { data: data }).value}
              target="_blank"
              rel="noreferrer"
            >
              {jsonQuery("user.first_name", { data: data }).value}
            </a>{" "}
            at{" "}
            <a target="_blank" rel="noreferrer" href="https://unsplash.com">
              Unsplash.com
            </a>
          </p>
        </div>
        <div className="details">
          <p>
            Dimensions : {data.height} x {data.width}{" "}
          </p>
          <p>Height : {data.height} pixels </p>{" "}
          <p>Width : {data.width} pixels </p>
          <Link to={`/photos/${data.id}/download`} className="download">
            Download
          </Link>
        </div>
      </div>
    </>
  );
};

export default Photo;
