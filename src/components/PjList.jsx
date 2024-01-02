import cssStyle from "../css/Project.module.css";
export default function PjList({ pjList }) {
  return (
    <div className={cssStyle.pjDesc}>
      <div className={cssStyle.pjImg}>
        <img
          src={`${process.env.PUBLIC_URL}/img/${pjList.pjImg}`}
          alt={pjList.PjList}
        ></img>
      </div>
      <span>{pjList.pjTitle}</span>
    </div>
  );
}
