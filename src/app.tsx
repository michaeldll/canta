import "./scss/global.scss";
import React from "react"
import { createRoot } from 'react-dom/client'
import MainCanvas from "./components/webgl/MainCanvas";
import Login from "./components/dom/Login";

createRoot(document.getElementById('root')).render(
  <>
    <div className="dom-container">
      <Login />
    </div>

    <div className="canvas-container">
      <MainCanvas/>
    </div>
  </>
)