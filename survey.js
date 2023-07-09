const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

const answers = {};

function askQuestion(index) {
  rl.question(questions[index], (answer) => {
    answers[index] = answer;

    if (index === questions.length - 1) {
      generateProfile();
      rl.close();
    } else {
      askQuestion(index + 1);
    }
  })
}

function generateProfile() {
  const profile = `
  Name: ${answers[0]}
  Activity: ${answers[1]}
  Listening to: ${answers[2]}
  Favorite meal: ${answers[3]}
  Favorite food: ${answers[4]}
  Favorite sport: ${answers[5]}
  Superpower: ${answers[6]}
  `;

  console.log("Profile Generated:");
  console.log(profile);
}

askQuestion(0);