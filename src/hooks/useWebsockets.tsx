import React, { useEffect, useMemo } from "react";

const useWebSocket = (host = "wss://chat-dll.herokuapp.com/") => {
  const WEBSOCKET = useMemo(() => new WebSocket(host), [host])

  useEffect(() => {
    WEBSOCKET.onopen = event => {
      console.log('connected:', event);
    }

    WEBSOCKET.onmessage = event => {
      let data
      let message

      data = JSON.parse(event.data)
      message = JSON.parse(data.message)

      console.log(data, message)
    }
  }, [host])

  return WEBSOCKET
}

export default useWebSocket