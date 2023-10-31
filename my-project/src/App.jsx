import Navbar from "./navbar";
import Sluzby from "./Sluzby";
import Partneri from "./partneri";
import PartnerWeby from "./PartnerWeby";
import Footer from "./footer";
import Kontakty from "./Kontakty";
import { Routes, Route } from "react-router-dom";
import Home from "./home";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/kontakty" element={<Kontakty></Kontakty>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
