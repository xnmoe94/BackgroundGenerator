const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];


/Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newaaray = [];

array.forEach(user => {
  let {username} = user;
  username += "!";
  newaaray.push(username);

})

console.log(newaaray);


//Create an array using map that has all the usernames with a "? to each of the usernames


const  newarray = array.map(user => {
  let {username} = user;
  return username += "?";

})
