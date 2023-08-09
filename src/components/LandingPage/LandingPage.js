import "./LandingPage.css";
import { useContext } from "react";
import UserContext from "../../store/user-context";
import { Link } from "react-router-dom";
const LandingPage = () => {
  const userCtx = useContext(UserContext);

  return (
    <div className="user-list-card">
      <h3 style={{ textAlign: "center" }}>Select an account</h3>
      <ul className="user-list">
        {userCtx.Users.map((user) => (
          <Link to={`/profile-details/${user.id}`} key={user.id}>
            <li className="user-list-item">
              <div className="user-details">
                <p>{user.name}</p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default LandingPage;
