import { Avatar, Icon } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import "./headerOptions.css";

const HeaderOptions = ({ Icon, avatar, Title, onClick }) => {
  const user = useSelector(selectUser);
  return (
    <div className="header-options" onClick={onClick}>
      {Icon && <Icon className="headerOptions__icon" />}
      {avatar && (
        <Avatar className="headerOptions__avatar" src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <p className="headerOptions__title">{Title}</p>
    </div>
  );
};

export default HeaderOptions;
