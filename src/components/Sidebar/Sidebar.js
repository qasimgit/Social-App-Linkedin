import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItems = (topic) => {
    return (
      <div className="sidebar__recentItems">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt="image"
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar" />
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,343</p>
        </div>
        <div className="sidebar__stat">
          <p>Views of posts</p>
          <p className="sidebar__statNumber">2,343</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recents</p>
        {recentItems("react")}
        {recentItems("javscript")}
        {recentItems("redux")}
        {recentItems("firebase")}
      </div>
    </div>
  );
}

export default Sidebar;
