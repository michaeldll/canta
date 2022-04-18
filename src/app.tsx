import "./scss/global.scss";
import React, { useState } from "react"
import { createRoot } from 'react-dom/client'
import BirdCanvas from "./components/webgl/BirdCanvas";
import Login from "./components/dom/Login";
import useWebSocket from "./hooks/useWebsockets";
import ChatBox from "./components/dom/ChatBox";

const App = () => {
  const [username, setUsername] = useState("")
  const websocket = useWebSocket()

  return (
    <>
      <div className="dom-container">
        <ChatBox setUsername={setUsername} />
      </div>

      <div className="canvas-container">
        <BirdCanvas username={username} websocket={websocket} />
      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <App />
)