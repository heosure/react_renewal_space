import { Link } from "react-router-dom";
import CloseBtn from "./CloseBtn";
export default function LoginModal({ open, setOpen }) {
  return (
    <>
      {open && (
        <div className="loginCon">
          <div className="loginModal">
            <CloseBtn setOpen={setOpen} />
            <div className="loginInput">
              <strong>VMSPACE LOGIN</strong>
              <input placeholder="id" />
              <input placeholder="password" />
              <button>LOGIN</button>
            </div>
            <div className="loginLink">
              <Link to={"membership"}>
                <span>회원가입</span>
              </Link>
              <Link to={"search_id"}>
                <span>아이디 찾기</span>
              </Link>
              <Link to={"search_password"}>
                <span>비밀번호 찾기</span>
              </Link>
            </div>
            <div className="snsMember">
              <Link to={"membership_FACEBOOK"}>LOGIN WITH FACEBOOK</Link>
              <Link to={"membership_TWITTER"}>LOGIN WITH TWITTER</Link>
              <Link to={"membership_NAVER"}>LOGIN WITH NAVER</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
