import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io.connect("http://localhost:3001");

const Index = () => {
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    // socket.emit("send_message", { message });
    socket.emit("others", { message, room });
    setMessage("");
  };

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  useEffect(() => {
    socket.on("others", (data) => {
      //   alert(data.message);
      setChat([...chat, data.message]);
    });
  }, [socket]);

  return (
    <div>
      <div>
        <input
          placeholder="Room Number..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />
        <button onClick={joinRoom}> Join Room</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Text"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div>
        {chat.map((item, index) => {
          console.log('item :>> ', item);
          return <h4 key={index}>{item}</h4>;
        })}
      </div>
    </div>
  );
};

export default Index;
