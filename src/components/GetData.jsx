import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const App = () => {
  const getData = async () => {
    let cli = "Client-ID ";
    let pass = process.env.REACT_APP_CLIENT;
    let auth = cli + pass;
    let response = await fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=${query}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
      }
    );
    const apiData = await response.json();
    setData(apiData.results);
  };
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("white girls");
  const [page, setPage] = useState("1");

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);
  const inputOnChange = (e) => {
    setSearch(e.target.value);
  };
  const pageOnChange = (e) => {
    setPage(e.target.value);
  };
  const onSubmitChange = (e) => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <>
      <form className="mainForm " onSubmit={onSubmitChange}>
        <Link to="/" className="home-icon">
          <FaHome />
        </Link>
        <input
          type="text"
          className="searchInput"
          placeholder="Search Waterfall , Nature or whatever comes in your mind"
          value={search}
          onChange={inputOnChange}
        />
        <button type="submit" id="submit" className="submit">
          Search
        </button>
      </form>
      <div className="pagination">
        Page :{" "}
        <select onChange={pageOnChange}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>50</option>
          <option>100</option>
        </select>
      </div>
      <div className="portfolio-div">
        {data.map((item, id) => (
          <Link key={item.id} to={`/photos/${item.id}`}>
            <img
              src={item.urls.small}
              className="portfolio-image"
              alt={item.alt_description}
            />
          </Link>
        ))}
      </div>
    </>
  );
};

export default App;
