import SearchIcon from "@material-ui/icons/Search";
import linkedin from "../../assets/linkedin.svg";
import me from "../../assets/me.png";
import "./header.css";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={linkedin} alt="linkedin" />

        <div className="header__search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} Title="Home" />
        <HeaderOptions Icon={SupervisorAccountIcon} Title="Network" />
        <HeaderOptions Icon={BusinessCenterIcon} Title="Jobs" />
        <HeaderOptions Icon={MessageIcon} Title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} Title="Notifications" />
        <HeaderOptions avatar={me} Title="me" />
      </div>
    </div>
  );
};

export default Header;
