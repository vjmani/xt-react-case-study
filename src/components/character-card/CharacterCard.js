import React from "react";

const CharacterCard = ({ character }) => {
  const getYearDiff = (createdDate) => {
    const createdYear = new Date(createdDate).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - createdYear;
  };

  return (
    <div className="result-card">
      <figure>
        <img
          className="responsive-img"
          src={character.image}
          alt={character.name}
        />
        <figcaption>
          <h3>{character.name}</h3>
          <div className="small-font">
            id: <span>{character.id}</span> - created
            <span> {getYearDiff(character.created)} years ago</span>
          </div>
        </figcaption>
      </figure>
      <div className="result-card-details small-font">
        <div className="result-attribute">
          <span className="result-attribute-name">STATUS</span>
          <span className="result-attribute-data">{character.status}</span>
        </div>
        <div className="result-attribute">
          <span className="result-attribute-name">SPECIES</span>
          <span className="result-attribute-data">{character.species}</span>
        </div>
        <div className="result-attribute">
          <span className="result-attribute-name">GENDER</span>
          <span className="result-attribute-data">{character.gender}</span>
        </div>
        <div className="result-attribute">
          <span className="result-attribute-name">ORIGIN</span>
          <span className="result-attribute-data">{character.origin.name}</span>
        </div>
        <div className="result-attribute">
          <span className="result-attribute-name">LAST LOCATION</span>
          <span className="result-attribute-data">
            {character.location.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;
