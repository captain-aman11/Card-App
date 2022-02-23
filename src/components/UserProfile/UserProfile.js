import React, { useState, useEffect } from "react";
import store from "../../store/configureStore";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { userAdded, updateUserDetails } from "../../store/users";

function UserProfile() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const dispatch = useDispatch();

  const [name, setName] = useState(user.name);
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSave = () => {
    dispatch(updateUserDetails({ name }));

    localStorage.setItem(
      `${user.email}`,
      JSON.stringify(store.getState().user)
    );
    sessionStorage.setItem("user", JSON.stringify(store.getState().user));

    alert("Updated Successfully");
  };

  useEffect(() => {
    dispatch(userAdded({ somebody: user }));
  });

  return (
    <>
      <div className="container">
        <Typography variant="h2">Welcome, 👋</Typography>
        <div>
          <Typography variant="h3" sx={{ mt: 2 }}>
            {name}
          </Typography>
        </div>
        <div className="editDetails">
          <Typography sx={{ mt: 5 }} variant="h5">
            Edit Name
          </Typography>
          <TextField
            margin="normal"
            value={name}
            onChange={handleChange}
            id="name"
            label="Name"
            name="name"
          />
          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{ mt: 3, ml: 2 }}
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
