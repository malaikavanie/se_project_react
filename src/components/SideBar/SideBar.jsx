import "./SideBar.css";
import avatar from "../../assets/Avatar.png";

function SideBar() {
  return (
    <div className="sidebar">
      <img src={avatar} alt="User Avatar" className="sidebar__avatar" />
      <p className="sidebar__username">Ruven Pinkhasov</p>
    </div>
  );
}

export default SideBar;
