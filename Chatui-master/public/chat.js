//connection
var socket = io.connect("http://10.52.3.25:4000");
// grabbing the elements from html
const msger = get('.msger')
const nameComponent = document.getElementById('nameComponent')
const nameForm = document.getElementById('nameForm')
const nameInput = document.getElementById('name-input')
const msgerForm = document.getElementById('msgInputArea')
const msgerInput = document.getElementById('msgInput')
const msgerChat = get(".msger-chat");
const btn = document.getElementById("send-button");


// vectors svg; to be changed later
const PERSON_ONE_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const PERSON_TWO_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";


// modify valid variable 
function modifyValid(valid){
  return !valid;
}


// EVENTS 
// On submitting a name Form
nameForm.addEventListener('submit', event => {
  event.preventDefault();
  
  // emit the name to the server
  socket.emit("nameInfo", {
    name: nameInput.value
  });
  
  socket.on('validateUser', function(data){
    console.log(data, 'here?')
    if (!data){ //name is available
      const userName = nameInput.value;
      if (!userName) return;
      // hide form name and display form msger(chat)
      nameForm.style.display = 'none';
      msger.style.display = '';
    }

  })  
});



// On submitting a msg Form 
msgerForm.addEventListener("submit", event => {
  event.preventDefault();
  const msgcont = msgerInput.value;
  if (!msgcont) return;
  socket.emit("chat", {
    message: msgcont,
    name: nameInput.value
  });
  msgerInput.value = "";
});


// Listening for events:
socket.on("chat", function (data) {
  console.log(data.socketId)
  appendMessage(data.name, PERSON_ONE_IMG, "left", data.message);
});


socket.on("chat-me", function (data) {
  appendMessage(data.name, PERSON_ONE_IMG, "right", data.message);
});





//making the message bubble
function appendMessage(name, img, side, text) {
  //   Simple solution for small apps??????
  const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
        </div>
        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;
  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

// Utils -- ignore these for now
function get(selector, root = document) {
  return root.querySelector(selector);
}
function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();
  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
