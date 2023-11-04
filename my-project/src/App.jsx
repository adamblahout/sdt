import Navbar from "./Navbar";
import Sluzby from "./Sluzby";
import Partneri from "./Partneri";
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
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
