import MoreBtn from "../components/MoreBtn";
import JobList from "../components/JobList";
import { jobData } from "../data";
import cssStyle from "../css/Job.module.css";
import { Link } from "react-router-dom";
export default function Job() {
  return (
    <div className={cssStyle.sec4}>
      <div>
        <h2>JOB</h2>
        <MoreBtn />
      </div>
      <div className={cssStyle.jobCon}>
        {jobData.map((jobList) => {
          return <JobList jobList={jobList} key={jobList._id} />;
        })}
        <div className={cssStyle.jobAbj}>
          <Link to={"job"}>
            <strong>유료 채용정보등록 +</strong>
            <p>
              국내 최대의 인터넷 건축 공간 VM SPACE의 엄선된 채용 시 스템을
              경험해보세요.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
