import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ftCon">
        <div>
          <div>
            <Link to={"/"}>
              <img
                src={`${process.env.PUBLIC_URL}/img/logo.png`}
                alt="SPACE로고"
              />
            </Link>
          </div>
          <p>
            ㈜CNB미디어 | 우.03781 서울시 서대문구 연희로 52-20(연희동) <br />
            이메일 editorial@spacem.org | Tel. 02-396-3359 <br />
            사업자등록번호 206-81-40424 | 통신판매신고번호
            제2013-서울서대문-0150호
            <br />
            대표자 황용철 | 개인정보관리책임자 김정은 | 청소년보호책임자 유진
            <br />
            호스팅 퓨처인포
          </p>
          <span>ⓒ 2023 VMSPACE. All rights reserved</span>
          <div className="linkdesc">
            <Link to={"spaceIntro"}>
              <span>SPACE 소개</span>
            </Link>
            <Link to={"tou"}>
              <span>이용약관</span>
            </Link>
            <Link to={"permethod"}>
              <span>개인정보취급방침</span>
            </Link>
            <Link to={"copyright"}>
              <span>저작권</span>
            </Link>
          </div>
        </div>
        <div className="SNS">
          <Link to={"space_facebook"}>
            <img
              src={`${process.env.PUBLIC_URL}/img/icon1.svg`}
              alt="SPACE페이스북"
            />
          </Link>
          <Link to={"space_instar"}>
            <img
              src={`${process.env.PUBLIC_URL}/img/icon2.svg`}
              alt="SPACE인스타"
            />
          </Link>
          <Link to={"space_youtube"}>
            <img
              src={`${process.env.PUBLIC_URL}/img/icon3.svg`}
              alt="SPACE유튜브"
            />
          </Link>
          <Link to={"space_meta"}>
            <img
              src={`${process.env.PUBLIC_URL}/img/icon4.svg`}
              alt="SPACE메타스페이스"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
