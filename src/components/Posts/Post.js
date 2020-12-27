import { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import InputOptions from "../Feed/InputOptions";
import "./Post.css";
import CommentOutlinedIcon from "@material-ui/icons/CommentOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import NearMeOutlinedIcon from "@material-ui/icons/NearMeOutlined";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

const Post = forwardRef(({ name, description, photoURL, message }, ref) => {
  const user = useSelector(selectUser);
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={user?.photoUrl}>{user?.email[0]}</Avatar>
        <div className="post__info">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p className="post__message">{message}</p>
      </div>
      <div className="post__buttons">
        <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" />
        <InputOptions Icon={CommentOutlinedIcon} title="Comment" />
        <InputOptions Icon={ShareOutlinedIcon} title="Share" />
        <InputOptions Icon={NearMeOutlinedIcon} title="Send" />
      </div>
    </div>
  );
});

export default Post;
