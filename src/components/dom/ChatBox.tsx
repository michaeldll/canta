import React, { useEffect } from "react";

export default function ChatBox({ setUsername }) {
  useEffect(() => {
    setUsername("test")
  }, [])
  return (
    <div className="chatbox">
      <h1>chat here</h1>
    </div>
  )
}