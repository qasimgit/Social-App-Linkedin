import { Icon } from "@material-ui/core";
import "./InputOptions.css";
const InputOptions = ({ title, Icon, color }) => {
  return (
    <div className="feed__inputOption">
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOptions;
