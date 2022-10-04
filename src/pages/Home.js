import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/header.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
      <p>Placement management software allows to plan placements, train the students as per relevant market requirements, organize recruitment drives and let companies recruit students. </p>

    <p>How is Training and Placement software helpful for higher education institutions?
    The placement management system creates databases of students, and companies can use these to access details of students who qualify the company’s criteria.
    Features of Placement Management software
    Placements Registration
    Students can register for placements online without help from the college placement management team each time they need to do so. The relevant details and documents can all be turned in online.
    Process of Placement Management software
    The process is relatively simple.
    <hr />
    </p> 
        <Link to="/menu">
        <button color="warning"  >Start Exploring</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;