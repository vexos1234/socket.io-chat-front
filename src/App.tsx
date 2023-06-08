import React, { useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import Messages from './components/Messages';
import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

interface MessagesProps {
  socket: Socket;
}

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room)
    }
  };

  return (
    <div>
      {/* <Chat /> */}
      <h3>Join a Chat</h3>
      <input type="text" placeholder="john..." onChange={(event) => {
        setUsername(event.target.value);
      }}
      />
      <input type="text" placeholder="Romm ID.." onChange={(event) => {
        setRoom(event.target.value);
      }}
      />
      <button onClick={joinRoom}>Join A Room</button>
      // @ts-ignore
      <Messages socket={socket} />
      <Chat socket={socket} />

    </div>
  );
}

export default App;
