import React from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../store/user-context";
import { useContext } from "react";
import "./ProfileDetails.css";
import Chat from "../Chat/Chat";

const ProfileDetails = () => {
  const params = useParams();
  const userCtx = useContext(UserContext);

  const user = userCtx.Users.find((data) => {
    return data.id == params.id;
  });

  return (
    <>
      <div className="profile-container">
        <div className="profile-section">
          <div className="profile-details">
            <img
              className="profile-image"
              src={user.profilepicture}
              alt={user.name}
            />
            <h2>{user.name}</h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>{user.phone}</p>
          </div>
          <div className="company-details">
            <h2>Company</h2>
            <p>Name: {user.company.name}</p>
            <p>Catchphrase: {user.company.catchPhrase}</p>
            <p>BS: {user.company.bs}</p>
          </div>
        </div>
        <div className="profile-section">
          <h2>Address</h2>
          <p>Street: {user.address.street}</p>
          <p>Suite: {user.address.suite}</p>
          <p>City: {user.address.city}</p>
          <p>Zipcode: {user.address.zipcode}</p>
          <div className="map-container">
            <img
              className="map-image"
              src="https://miro.medium.com/v2/resize:fit:667/1*6ce1Cw4vvB_JnINlrj7uXw.png"
              alt="Map"
            />
            <p>Lat: {user.address.geo.lat}</p>
            <p>Lng: {user.address.geo.lng}</p>
          </div>
        </div>
      </div>
      <Chat />
    </>
  );
};

export default ProfileDetails;
