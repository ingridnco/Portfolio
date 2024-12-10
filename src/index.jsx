import React from "react"
import ReactDOM from "react-dom/client"
import Modal from "react-modal"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import reportWebVitals from "./reportWebVitals"
import "./styles/index.scss"
import Home from "./pages/Home"
import Competences from "./pages/Competences"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"

Modal.setAppElement("#root")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Router>
      <div className="main-container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  </React.StrictMode>
)

reportWebVitals()
