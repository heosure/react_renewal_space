import Header from "./Header";
import Footer from "./Footer";
import AdjModal from "../components/AdjModal";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Layout() {
  let [event, Setevent] = useState(true);
  let [open, setOpen] = useState(false);
  return (
    <>
      <div onScroll={ScrollTop()} />
      <AdjModal event={event} Setevent={Setevent} />
      <Header open={open} setOpen={setOpen} />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
