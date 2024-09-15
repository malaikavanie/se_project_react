import "./Sidebar.css";
import avatar from "../../assets/Avatar.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={avatar} alt="User Avatar" className="sidebar__avatar" />
      <p className="sidebar__username">Malaika Vanie</p>
    </div>
  );
}

export default Sidebar;
