import React from "react";
import "./Badges.css"; 

const badgesData = [
 
  {
    "type": "Issuer",
    "id": "https://api.badgr.io/public/issuers/iGTnDAlbTGOA3ULPhD6b5Q",
    "@context": "https://w3id.org/openbadges/v2",
    "name": "FullStack Web Developer - The Bridge School",
    "url": "https://www.thebridge.tech/bootcamps/bootcamp-fullstack-developer",
    "email": "coordinacion@thebridgeschool.es",
    "description": "FullStack Web Developer Bootcamp",
    "image": "https://api.badgr.io/public/issuers/iGTnDAlbTGOA3ULPhD6b5Q/image"
  },
 
];

const Badges = () => {
  return (
    <div className="badges-container">
      {badgesData.map((badge, index) => (
        <div key={index} className="badge">
          <img src={badge.image} alt={badge.name} />
          <p>{badge.description}</p>
          <a href={badge.url} target="_blank" rel="noopener noreferrer">More information</a>
        </div>
      ))}
    </div>
  );
};

export default Badges;
