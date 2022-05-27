import { useState } from "react";
import axios from 'axios';
import "./login.css";

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handleClick = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/1");
      setUser(data);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <span className="user">{user.name}</span>
      <form>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button disabled={!username || !password} onClick={handleClick}>
          {loading ? "please wait" : "Login"}
        </button>
        <span
          className="error"
          data-testid="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          something went wrong
        </span>
      </form>
    </div>
  );
};

export default Login;
