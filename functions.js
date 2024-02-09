let mode = -1
let mode_text = []

document.addEventListener("DOMContentLoaded", function (event) {
    mode_text = [{
        "title": "Random Propts",
        "description": "Compete against your partner in a friendly artistic showdown to see who can create the most imaginative and captivating drawings based on randomly selected prompts",
        "options": ["A cozy cabin in the woods", "A whimsical fairy tale castle", "A bustling city street", "A serene mountain landscape", "An underwater scene with colorful coral and fish", "A majestic dragon soaring through the sky", "A group of animals having a picnic", "A futuristic cityscape with flying cars", "A magical forest filled with glowing mushrooms", "A space station orbiting a distant planet", "A field of blooming flowers in springtime", "An enchanted garden with talking animals", "A haunted house on a stormy night", "A peaceful countryside farm with rolling hills", "A secret underground laboratory", "A retro arcade packed with classic games", "A pirate ship sailing on choppy waters", "A whimsical carousel with fantastical creatures", "A bustling market in a foreign land", "A mystical wizard's tower surrounded by mist"],
        "function": function() {
        const random_selection = mode_text[mode].options[Math.floor(Math.random() * mode_text[mode].options.length)];
        document.getElementById("game_output").textContent = random_selection;
    }
    }, {
    "title": "Letter Array",
    "description": "Compete with your partner to craft captivating drawings inspired by a variety of words, showcasing your creativity and artistic flair in an enjoyable challenge",
    "options": ["Elephant", "Dolphin", "Giraffe", "Tiger", "Penguin", "Owl", "Butterfly", "Lion", "Octopus", "Koala", "Telescope", "Bicycle", "Umbrella", "Guitar", "Camera", "Clock", "Suitcase", "Typewriter", "Sunglasses", "Book", "Hot air balloon", "Sunflower", "Sailboat", "Map", "Coffee cup", "Rainbow", "Microphone", "Palette", "Chessboard", "Teddy bear", "Ice cream cone", "Eiffel Tower", "Soccer ball", "Waterfall", "Fireworks", "Moon", "Tent", "Mountain", "Swordfish"],
    "function": function() {
        const random_elements = get_random_elements(mode_text[mode].options, 3);
        document.getElementById("game_output").textContent = random_elements.join("\n")
    }
}]
});

function random_propts() {
    if (mode != 0) {
        mode = 0;

        set_title_n_description(mode);
    }

    reset_game_output();
}
function letter_array() {
    if (mode != 1) {
        mode = 1;

        set_title_n_description(mode);
    }

    reset_game_output();
}
function set_title_n_description(mode) {
    // Setting the game title
    document.getElementById("game_title").textContent = mode_text[mode].title;
    // Setting the game description
    document.getElementById("game_description").textContent = mode_text[mode].description;
}
function game_action() {
    if (mode != -1) {
        mode_text[mode].function();
    }
}


function reset_game_output() {
    // Remove text from the output
    document.getElementById("game_output").textContent = "";
}

function get_random_elements(array, num_elements) {
    const shuffled_array = array.slice();

    for (let i = shuffled_array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled_array[i], shuffled_array[j]] = [shuffled_array[j], shuffled_array[i]];
    }

    return shuffled_array.slice(0, num_elements);
}