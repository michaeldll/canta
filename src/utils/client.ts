import openSocket from "socket.io-client";

// const socket = openSocket('https://bddi-2019-chat.herokuapp.com/');
const socket = openSocket("localhost:3000");

function sendMessage(data) {
  console.log(data);
  socket.emit("message new", data);
}

function register(data) {
  console.log(data.username);
  socket.emit("user register", {
    username: data.username,
    avatar: data.avatar,
  });
}

function listenForRegister(onUserRegistered) {
  socket.on("user registered", onUserRegistered);
}

function listenForUsers(onUserUpdate) {
  socket.on("users update", onUserUpdate);
}

// function type() {
// 	console.log('type');
// 	socket.emit('user typing');
// }

function listenForMessage(onMessageReceived) {
  socket.on("message new", onMessageReceived);
}

function listenForChatHistory(onChatHistoryReceived) {
  socket.on("messages update", onChatHistoryReceived);
}

function listenForErrors(onErrorReceived) {
  socket.on("chat error", onErrorReceived);
}

export {
  sendMessage,
  register,
  listenForMessage,
  listenForErrors,
  listenForRegister,
  listenForUsers,
  listenForChatHistory,
};
