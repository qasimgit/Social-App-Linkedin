import { Icon } from "@material-ui/core";
const InputOptions = ({ title, Icon, color }) => {
  return (
    <div
      style={{
        display: "flex",
        color: "gray",
        cursor: "pointer",
      }}
      className="feed__inputOption"
    >
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  );
};

export default InputOptions;
