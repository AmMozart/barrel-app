import { createStore } from 'redux';
import reducers from './reducers/reducers';

const store = createStore(reducers);

// window.WebSocket = window.WebSocket || window.MozWebSocket;
// let websocket = new WebSocket('ws://192.168.0.136:10011/ws');

// websocket.onopen = function () {
//   console.log("OnOpen");
// };
// websocket.onclose = function (e) {
//     console.log("onclose: ", e)
// };
// websocket.onerror = function () {
//   console.log("onerror");
// };
// websocket.onmessage = function (message) {
//     console.log("message: "+message.data);
// };

store.subscribe(() => {
  console.log(store.getState().barrel);
  // websocket.send( JSON.stringify(store.getState().barrel) );
  //websocket.send("hi");
  //websocket.send("ping");
  //websocket.send("close");
});

export default store;