// Variables
const nouns1 = ["Cat", "Dog", "Tree", "Car", "Book"];
let countNoun1 = 0;

// Function to handle Noun 1 button click
function noun1_on_click() {
    const chosenNoun1 = document.getElementById("chosenNoun1");
    chosenNoun1.textContent = nouns1[countNoun1];
    countNoun1 = (countNoun1 + 1) % nouns1.length;
}

// Add similar functions for other buttons (Verb, Adjective, Noun2, Setting)

// Function to show the story
function playback_on_click() {
    // Concatenate and display the story
    const storyText = "Once upon a time, there was a " + document.getElementById("chosenNoun1").textContent + "...";
    document.getElementById("story").textContent = storyText;
}

// Function to generate a random story
function random_on_click() {
    // Get random words and display
    const chosenNoun1 = document.getElementById("chosenNoun1");
    chosenNoun1.textContent = getRandomElement(nouns1);
    // Repeat for other buttons
}

// Function to reset the story
function reset_on_click() {
    // Reset chosen words and story
    document.getElementById("chosenNoun1").textContent = "";
    // Repeat for other buttons
    document.getElementById("story").textContent = "";
}

// Function to get a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Set student ID
document.getElementById("studentId").textContent = "Student ID: 200561620";
