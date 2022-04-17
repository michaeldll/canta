import "./scss/global.scss";
import React from "react"
import { createRoot } from 'react-dom/client'
import MainCanvas from "./components/webgl/MainCanvas";

createRoot(document.getElementById('root')).render(<MainCanvas/>)