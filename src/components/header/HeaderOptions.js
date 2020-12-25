import { Avatar, Icon } from "@material-ui/core";
import "./headerOptions.css";

const HeaderOptions = ({ Icon, avatar, Title }) => {
  return (
    <div className="header-options">
      {Icon && <Icon className="headerOptions__icon" />}
      {avatar && <Avatar className="headerOptions__avatar" src={avatar} />}
      <p className="headerOptions__title">{Title}</p>
    </div>
  );
};

export default HeaderOptions;
