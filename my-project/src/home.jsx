import Navbar from "./Navbar";
import Sluzby from "./Sluzby";
import Partneri from "./Partneri";
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
