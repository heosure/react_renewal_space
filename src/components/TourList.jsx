import { useNavigate } from "react-router-dom";
import cssStyle from "../css/Tour.module.css";
export default function TourList({ tourList }) {
  let navigate = useNavigate();
  return (
    <div className={cssStyle.tourDesc}>
      <div className={cssStyle.tourImg}>
        <img
          src={`${process.env.PUBLIC_URL}/img/${tourList.dpImg}`}
          alt={tourList.dpTitle}
        />
      </div>
      <div>
        <strong>
          전시제목 : <span>{tourList.dpTitle}</span>
        </strong>
        <strong>
          전시장소 : <span>{tourList.dpLocal}</span>
        </strong>
        <strong>
          전시일정 : <span>{tourList.dpDate}</span>
        </strong>
        <strong>
          관람시간 : <span>{tourList.dpTime}</span>
        </strong>
        <strong>
          휴관일 : <span>{tourList.dpClose}</span>
        </strong>
        <button
          onClick={() => {
            navigate(`/${tourList.dpTitle}`);
          }}
        >
          more
        </button>
      </div>
    </div>
  );
}
