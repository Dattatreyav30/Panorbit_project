import React, { useContext } from "react";
import UserContext from "../../store/user-context";
import "./Chat.css";

const Chat = () => {
  const userCtx = useContext(UserContext);
  
  return (
    <div className="chat-container">
      <select className="chat-select">
        <option>Chat</option>
        {userCtx.Users.map((user) => (
          <option key={user.id}>{user.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Chat;

