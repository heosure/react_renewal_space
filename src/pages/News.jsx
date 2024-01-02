import MoreBtn from "../components/MoreBtn";
import NewsList from "../components/NewsList";
import { InformationData } from "../data";
import cssStyle from "../css/News.module.css";

export default function News() {
  let newData = InformationData.filter(
    (InformationData) => InformationData.InfCate === "NEWS"
  );
  return (
    <div className={cssStyle.sec3}>
      <div>
        <h2>NEWS</h2>
        <MoreBtn />
      </div>
      <div className={cssStyle.newCon}>
        {newData.map((newsList) => {
          return <NewsList newsList={newsList} key={newsList._id} />;
        })}
      </div>
    </div>
  );
}
