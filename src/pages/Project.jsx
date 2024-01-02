import { projectData } from "../data";
import PjList from "../components/PjList";
import MoreBtn from "../components/MoreBtn";
import cssStyle from "../css/Project.module.css";

export default function Project() {
  let newData = projectData.filter(
    (projectData) => projectData.pjCate === "FEATURED"
  );
  return (
    <div className={cssStyle.sec2}>
      <div>
        <h2>PROJECT</h2>
        <MoreBtn />
      </div>
      <div className={cssStyle.pjCon} key={projectData._id}>
        {newData.map((pjList) => {
          return <PjList pjList={pjList} key={pjList._id} />;
        })}
      </div>
    </div>
  );
}
