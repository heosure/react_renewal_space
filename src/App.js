import { Route, Routes } from "react-router-dom";
import Layout from "./elements/Layout";
import Main from "./pages/Main";
import Tour from "./pages/Tour";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

function Mainpage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={"/"} element={<Main />}></Route>
          <Route path={"/tour"} element={<Tour />}></Route>
        </Route>
        <Route path="*" element={<>404 잘못된 접근</>} />
      </Routes>
    </>
  );
}

export default Mainpage;
