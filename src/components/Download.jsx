import React, { useState, useEffect } from "react";

const Download = ({ match }) => {
  let result = async () => {
    let cli = "Client-ID ";
    let pass = process.env.REACT_APP_CLIENT;
    let auth = cli + pass;
    const photoFetch = await fetch(
      `https://api.unsplash.com/photos/${match.params.id}/download`,
      {
        method: "GET",
        headers: {
          "Content-Type": "image/png",
          Authorization: auth,
        },
      }
    );
    const ml = await photoFetch.json();
    setDownload(ml);
  };

  const [download, setDownload] = useState([]);
  useEffect(() => {
    result();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setDownload]);

  return (
    <>
      <div className="final-div">
        <p className="paragraph">
          To Download pic please click on Download Button & Right Click on Photo
          and Choose "Save Image As" option{" "}
        </p>
        <a
          className="download"
          href={download.url}
          target="_blank"
          rel="noreferrer"
          download="file.jpg "
        >
          Download
        </a>
      </div>
    </>
  );
};

export default Download;
