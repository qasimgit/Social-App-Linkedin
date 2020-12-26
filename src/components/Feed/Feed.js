import { useState, useEffect } from "react";
import "./feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOptions from "./InputOptions";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import Post from "../Posts/Post";
import me from "../../assets/me.png";
import { db } from "../firebase";
import firebase from "firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapShot) => {
        setPosts(
          snapShot.docs.map((doc) => {
            return {
              id: doc.id,
              data: doc.data(),
            };
          })
        );
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    console.log("Send post clicked");
    db.collection("posts").add({
      name: "M. Qasim",
      description: "Entreprenur",
      message: input,
      photoURL: "",
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              type="text"
              onChange={(e) => setInput(e.target.value)}
              value={input}
              placeholder="Start a post"
            />
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
      {posts.map(({ id, data: { name, description, message, photoURL } }) => {
        return (
          <Post
            key={id}
            name={name}
            description={description}
            photoURL={photoURL}
            message={message}
          />
        );
      })}
    </div>
  );
};

export default Feed;
