import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SmsIcon from '@mui/icons-material/Sms';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import SendIcon from '@mui/icons-material/Send';
import AddBoxIcon from '@mui/icons-material/AddBox';

const Sidebar = () => {
  const { dispatch } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">LanaLine</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <SmsIcon className="icon" />
              <span>SMS</span>
            </li>
          </Link>
          <Link to="/send" style={{ textDecoration: "none" }}>
            <li>
              <SendIcon className="icon" />
              <span>Send SMS</span>
            </li>
          </Link>

          {user.email === "admin@lanaline.ps" && <Link to="/add" style={{ textDecoration: "none" }}>
            <li>
              <AddBoxIcon className="icon" />
              <span>Add SMS</span>
            </li>
          </Link>}

          <p className="title">Settings</p>

          <li onClick={() => dispatch({ type: "LOGOUT" })}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
