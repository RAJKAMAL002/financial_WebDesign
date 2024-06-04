import React from "react";
import "./App.css";
import { Navbar } from "./assets/Navbar";
import { Container1 } from "./assets/Container1";
import { Container2 } from "./assets/Container2";
import { Container3 } from "./assets/Container3";
import { Container4 } from "./assets/Container4";
import { Container5 } from "./assets/Container5";
import { Container6 } from "./assets/Container6";
import { Container7 } from "./assets/Container7";
import { Footer } from "./assets/Footer";

function App() {
  return (
    <>
      <div className=" overflow-hidden">
        <Navbar />
        <Container1 />
        <Container3 />
        <Container2 />
        <Container4 />
        <Container5 />
        <Container6 />
        <Container7 />
        <Footer />
      </div>
    </>
  );
}

export default App;
