import React, { useContext } from "react";
import { UserContext } from "../Providers/UserProvider";
import { navigate } from "@reach/router";
import {auth} from "../firebase";
import Button from 'react-bootstrap/Button';

const ProfilePage = () => {
  const user = useContext(UserContext);
  const {photoURL, displayName, email} = user;
  console.log(user);
  

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div>
        <div style={{display: "inline-flex", textAlign: "center", padding: "20px"}}>
          <div
            style={{
              background: `url(${photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
              backgroundSize: "cover",
              height: "100px",
              width: "100px",
              borderRadius: '50%',
            }}
          />
          <div>
            <h2 style={{padding: '0 20px', textAlign: "left"}}>{displayName}</h2>
            <h3 style={{padding: '0 20px', textAlign: "left"}}>{email}</h3>
          </div>
        </div>
      </div>
      <Button variant='primary' onClick={() => {auth.signOut()}}>
        Sign out
      </Button>
    </div>
  ) 
};

export default ProfilePage;