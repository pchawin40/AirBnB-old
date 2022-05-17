const database = [
  {
    username: "andrei",
    password: "supersecret"
  },
  {
    username: "Sally",
    password: "123",
  },
  {
    username: "ingrid",
    password: "777"
  }
];

const newsFeed = [
  {
    username: "Bobby",
    timeline: "So tired from all that learning!"
  },
  {
    username: "Sally",
    timeline: "Javascript is sooooo cool!"
  }
];

const userNamePrompt = prompt("What's your username? ");
const password = prompt("What's your password? ");

function signIn(username, password) {
  if (database.map(currUser => currUser.username === username && currUser.password === password)) 
    console.log(newsFeed);
  else 
    alert("Sorry, wrong username and password!")  
}

signIn(userNamePrompt, password);
