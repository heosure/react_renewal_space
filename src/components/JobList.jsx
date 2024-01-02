import cssStyle from "../css/Job.module.css";
const plusBtn = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="25"
    width="25"
    viewBox="0 0 448 512"
  >
    <path d="M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
  </svg>
);
export default function JobList({ jobList }) {
  return (
    <div className={cssStyle.jobDesc}>
      <div className={cssStyle.jobCDes}>
        <div className={cssStyle.plusBtn}>{plusBtn}</div>
        <div>
          <strong>{jobList.jName}</strong>
          <span className={cssStyle.jDesc}>{jobList.jDesc}</span>
        </div>
        <div>
          <span className={cssStyle.jCar}>{jobList.jCar}</span>
          <span>{jobList.jDate}</span>
        </div>
      </div>
    </div>
  );
}
