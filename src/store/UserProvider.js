import { useEffect, useState } from "react";
import UserContext from "./user-context";

const UserProvider = (props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await fetch("https://panorbit.in/api/users.json");
        const data = await response.json();
        setUsers(data.users)
      };
      fetchData();
    } catch (err) {
      console.log("error", err);
    }
  }, []);
  const userContext = {
    Users: users,
  };

  return (
    <UserContext.Provider value={userContext}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
