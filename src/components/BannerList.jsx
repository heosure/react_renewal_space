import { useNavigate } from "react-router-dom";
import cssStyle from "../css/Banner.module.css";
export default function BannerList({ bannerList }) {
  let navigate = useNavigate();
  return (
    <div className={cssStyle.banSlide}>
      <div className={cssStyle.bImg}>
        <img
          src={`${process.env.PUBLIC_URL}/img/${bannerList.bImg}`}
          alt={bannerList.bTitle}
        ></img>
      </div>
      <div className={cssStyle.bDesc}>
        <strong>{bannerList.bTitle}</strong>
        <p>{bannerList.bSubTitle}</p>
        <button
          className={cssStyle.bName}
          onClick={() => {
            navigate(`/${bannerList.bName}`);
          }}
        >
          {bannerList.bName}
        </button>
      </div>
    </div>
  );
}
