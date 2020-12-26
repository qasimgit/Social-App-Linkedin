import "./feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOptions from "./InputOptions";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "../Posts/Post";
import me from "../../assets/me.png";
import { useState } from "react";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="Start a post" />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions title="Photo" Icon={ImageIcon} color="#7085f9" />
          <InputOptions
            title="Video"
            Icon={SubscriptionsIcon}
            color="#E7A33E"
          />
          <InputOptions title="Events" Icon={EventNoteIcon} color="#C0CBCD" />
          <InputOptions
            title="Write articels"
            Icon={CalendarViewDayIcon}
            color="7FC15E"
          />
        </div>
      </div>
      <Post
        name="Muhammad Qasim"
        description="Front-End Developer"
        photoURL={me}
        message="I am  enjyoing here are you?"
      />
    </div>
  );
};

export default Feed;
