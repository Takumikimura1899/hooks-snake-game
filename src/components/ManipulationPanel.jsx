import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowUp,
  faArrowDown,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const ManipulationPanel = ({ onChange }) => {
  const onUp = () => onChange("up");
  const onRight = () => onChange("right");
  const onLeft = () => onChange("left");
  const onDown = () => onChange("down");

  return (
    <div className="manipulation-panel">
      <button className="manipulation-btn btn btn-left" onClick={onLeft}>
        👈
      </button>
      <div>
        <button className="manipulation-btn btn btn-up" onClick={onUp}>
          👆
        </button>
        <button className="manipulation-btn btn btn-down" onClick={onDown}>
          👇
        </button>
      </div>
      <button className="manipulation-btn btn btn-right" onClick={onRight}>
        👉
      </button>
    </div>
  );
};

export default ManipulationPanel;
