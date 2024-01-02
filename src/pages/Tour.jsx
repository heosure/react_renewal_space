import { dpData } from "../data";
import TourList from "../components/TourList";
import TourMap from "../components/TourMap";
import cssStyle from "../css/Tour.module.css";
export default function Tour() {
  return (
    <div className={cssStyle.tourPage}>
      <h2>TOUR</h2>
      <div className={cssStyle.tourCon}>
        {dpData.map((tourList) => {
          return <TourList tourList={tourList} key={tourList._id} />;
        })}
      </div>
      <TourMap dpData={dpData} />
    </div>
  );
}
