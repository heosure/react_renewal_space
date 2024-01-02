import { Link } from "react-router-dom";
import MoreBtn2 from "./MoreBtn2";
import cssStyle from "../css/closeBtn.module.css";
let closeBtn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="20"
    width="18"
    viewBox="0 0 448 512"
  >
    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm79 143c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
  </svg>
);
export default function AdjModal({ event, Setevent }) {
  return (
    <>
      {event && (
        <div className="eventCon">
          <div className="eventmodal">
            <button
              className={cssStyle.closeBtn}
              onClick={() => {
                Setevent(!event);
              }}
            >
              {closeBtn}
              <span>close</span>
            </button>
            <div>
              <Link to={"event"}>
                <MoreBtn2 />
              </Link>
              <div className="imgCon">
                <img
                  src={`${process.env.PUBLIC_URL}/img/modal1.png`}
                  alt="연말프로모션"
                />
              </div>
            </div>
            <div>
              <Link to={"academia"}>
                <MoreBtn2 />
              </Link>
              <div className="imgCon">
                <img
                  src={`${process.env.PUBLIC_URL}/img/modal2.jpg`}
                  alt="SPAVE아카데미아"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
