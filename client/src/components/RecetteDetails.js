/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
// import image from "../assets/img/doowap.png"; // with import

const RecetteDetails = (props) => {
  const { recette } = props;

  return (
    <div>
      <ul className="update-container">
        <div className="update-recette">
          <li>
            {" "}
            <h3>Nom de la recette:</h3> <br /> {recette.name}
          </li>
          <br />
          <li>
            {" "}
            <h3>Ingredients:</h3> <br /> {recette.ingredients}
          </li>
          <br />
          <li>
            {" "}
            <h3>Preparations:</h3> <br />
            {recette.preparations}
          </li>
        </div>
        <div className="left-part">
          <img
            src={`data:image/jpg;base64,${recette.image}`}
            style={{ width: "100%", height: "100%" }}
            alt="recette"
          />

          {/* <img src={image} alt="photo" /> */}
        </div>
      </ul>
    </div>
  );
};

export default RecetteDetails;
