import Navbar from "./navbar";
import Sluzby from "./Sluzby";
import Partneri from "./partneri";
import PartnerWeby from "./PartnerWeby";
import Footer from "./footer";
import Kontakty from "./Kontakty";
import { Routes, Route } from "react-router-dom";

function home() {
  return (
    <>
      <Sluzby></Sluzby>
      <Partneri></Partneri>
      <PartnerWeby></PartnerWeby>
    </>
  );
}

export default home;
