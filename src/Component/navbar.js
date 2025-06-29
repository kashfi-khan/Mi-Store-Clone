  import React from "react";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";

const searchIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
    <path d="m19.6 21-6.3-6.3q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l6.3 6.3ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z" />
  </svg>
);

const navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <Link to="/">
          <img src={require("../Logo/Logo.png")} alt="" id="logoImage" />
        </Link>
      </div>

      <Link className="navlinks" to="/#miphones">
        Mi Phones
      </Link>
      <Link className="navlinks" to="/#redmiphones">
        Redmi Phones
      </Link>
      <Link className="navlinks" to="/#tv">
        TV
      </Link>
      <Link className="navlinks" to="/#laptops">
        Laptops
      </Link>
      <Link className="navlinks" to="/#lifestyle">
        Fitness & Lifestyle
      </Link>
      <Link className="navlinks" to="/#home">
        Home
      </Link>
      <Link className="navlinks" to="/#audio">
        Radio
      </Link>
      <Link className="navlinks" to="/#accessories">
        Accessories
      </Link>

      <div className="searchbox">
        <input type="text" name="search" placeholder="search products" />
        {searchIcon}
      </div>
    </div>
  );
};

export default navbar;
