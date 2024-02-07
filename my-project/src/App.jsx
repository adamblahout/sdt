import Navbar from "./Navbar";
import Sluzby from "./Sluzby";
import Partneri from "./Partneri";
import Profil from "./profil";
import PartnerWeby from "./PartnerWeby";
import Footer from "./footer";
import Kontakty from "./Kontakty";
import { Routes, Route } from "react-router-dom";
import Home from "./home";
import Truckpage from "./Truck_page";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/kontakty" element={<Kontakty></Kontakty>}></Route>
        <Route path="/truck" element={<Truckpage></Truckpage>}></Route>
        <Route path="/sluzby" element={<Sluzby></Sluzby>}></Route>
        <Route path="/profil" element={<Profil></Profil>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
