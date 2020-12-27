import { Avatar, Icon } from "@material-ui/core";
import "./headerOptions.css";

const HeaderOptions = ({ Icon, avatar, Title, onClick }) => {
  return (
    <div className="header-options" onClick={onClick}>
      {Icon && <Icon className="headerOptions__icon" />}
      {avatar && <Avatar className="headerOptions__avatar" src={avatar} />}
      <p className="headerOptions__title">{Title}</p>
    </div>
  );
};

export default HeaderOptions;
