import Header from "./Header";
import Footer from "./Footer";
import AdjModal from "../components/AdjModal";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Layout() {
  let [event, setevent] = useState(true);
  let [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useLocation().pathname]);

  useEffect(() => {
    if (event) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [event]);

  return (
    <>
      <AdjModal event={event} setevent={setevent} />
      <Header open={open} setOpen={setOpen} />
      <Outlet></Outlet>
      <Footer />
    </>
  );
}
