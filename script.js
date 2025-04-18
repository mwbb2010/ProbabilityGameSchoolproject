// Coin Flip Game
const coin = document.querySelector('.coin');
const flipButton = document.getElementById('flipCoin');
const resetButton = document.getElementById('resetCoin');
const headsCount = document.getElementById('headsCount');
const tailsCount = document.getElementById('tailsCount');
const totalFlips = document.getElementById('totalFlips');

let heads = 0;
let tails = 0;
let total = 0;

flipButton.addEventListener('click', () => {
    const random = Math.random();
    coin.classList.add('flipping');
    
    setTimeout(() => {
        if (random < 0.5) {
            coin.style.transform = 'rotateY(0deg)';
            heads++;
            headsCount.textContent = heads;
        } else {
            coin.style.transform = 'rotateY(180deg)';
            tails++;
            tailsCount.textContent = tails;
        }
        total++;
        totalFlips.textContent = total;
        coin.classList.remove('flipping');
    }, 600);
});

resetButton.addEventListener('click', () => {
    heads = 0;
    tails = 0;
    total = 0;
    headsCount.textContent = '0';
    tailsCount.textContent = '0';
    totalFlips.textContent = '0';
    coin.style.transform = 'rotateY(0deg)';
});

// Dice Roll Game
const dice = document.querySelector('.dice');
const rollButton = document.getElementById('rollDice');
const resetDiceButton = document.getElementById('resetDice');
const rollCount = document.getElementById('rollCount');
const averageRoll = document.getElementById('averageRoll');

let rolls = 0;
let sum = 0;

rollButton.addEventListener('click', () => {
    const result = Math.floor(Math.random() * 6) + 1;
    dice.textContent = result;
    rolls++;
    sum += result;
    rollCount.textContent = rolls;
    averageRoll.textContent = (sum / rolls).toFixed(1);
});

resetDiceButton.addEventListener('click', () => {
    rolls = 0;
    sum = 0;
    rollCount.textContent = '0';
    averageRoll.textContent = '0';
    dice.textContent = '1';
});

// Probability Quiz
const quizQuestions = [
    {
        question: "In Mr. Burr's rock band, we need to decide who gets to play the guitar solo. We flip a coin. What's the probability of getting heads?",
        options: ["1/4", "1/2", "3/4", "1"],
        correct: 1,
        feedback: "Rock on! Just like Mr. Burr taught us, a fair coin has an equal chance of landing on heads or tails (1/2 or 50%)."
    },
    {
        question: "At the School of Rock concert, we're rolling a die to pick the next song. What's the probability of rolling a 6?",
        options: ["1/6", "1/3", "1/2", "1"],
        correct: 0,
        feedback: "Awesome! As Mr. Burr explained, since there are 6 possible outcomes and only one way to get a 6, the probability is 1/6. Keep rocking!"
    },
    {
        question: "Mr. Burr's band needs to pick two guitarists. We flip a coin twice to decide. What's the probability of getting heads both times?",
        options: ["1/4", "1/2", "3/4", "1"],
        correct: 0,
        feedback: "Perfect! Remember what Mr. Burr said about independent events? We multiply the probabilities: 1/2 × 1/2 = 1/4. That's like getting a double guitar solo!"
    },
    {
        question: "At the School of Rock talent show, you win if you roll an even number. What's the probability of rolling an even number?",
        options: ["1/6", "1/3", "1/2", "2/3"],
        correct: 2,
        feedback: "Awesome! As Mr. Burr showed us, there are 3 even numbers (2, 4, 6) out of 6 possible outcomes, so the probability is 1/2. That's a rock-solid chance!"
    },
    {
        question: "Mr. Burr brought his collection of vinyl records. What's the probability of picking a rock album from his collection of 52 records?",
        options: ["1/4", "1/2", "3/4", "1"],
        correct: 1,
        feedback: "Great job! Just like Mr. Burr explained, in his collection, half the records are rock albums, so the probability is 1/2 or 50%. Rock on!"
    }
];

let currentQuestion = 0;
let score = 0;
const quizContainer = document.getElementById('quiz-container');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const nextButton = document.getElementById('nextQuestion');
const quizScore = document.getElementById('quizScore');
const totalQuestions = document.getElementById('totalQuestions');

function displayQuestion() {
    const question = quizQuestions[currentQuestion];
    quizQuestion.textContent = question.question;
    quizOptions.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('div');
        button.className = 'quiz-option';
        button.textContent = option;
        button.addEventListener('click', () => selectAnswer(index));
        quizOptions.appendChild(button);
    });
    
    nextButton.style.display = 'none';
    quizScore.textContent = score;
    totalQuestions.textContent = quizQuestions.length;
}

function selectAnswer(index) {
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(option => option.style.pointerEvents = 'none');
    
    const question = quizQuestions[currentQuestion];
    const feedback = document.createElement('div');
    feedback.className = 'quiz-feedback';
    
    if (index === question.correct) {
        options[index].style.background = '#2ecc71';
        options[index].style.color = 'white';
        score++;
        feedback.innerHTML = `
            <p class="correct">🎸 ${question.feedback}</p>
            <p class="encouragement">Mr. Burr would be proud! Keep rocking! 🤘</p>
        `;
    } else {
        options[index].style.background = '#e74c3c';
        options[index].style.color = 'white';
        options[question.correct].style.background = '#2ecc71';
        options[question.correct].style.color = 'white';
        feedback.innerHTML = `
            <p class="incorrect">Not this time, but no worries!</p>
            <p class="explanation">${question.feedback}</p>
            <p class="encouragement">Remember what Mr. Burr always says - practice makes perfect! 🎸</p>
        `;
    }
    
    quizOptions.appendChild(feedback);
    nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizQuestions.length) {
        displayQuestion();
    } else {
        quizContainer.innerHTML = `
            <h3>Quiz Complete!</h3>
            <p>Your final score: ${score}/${quizQuestions.length}</p>
            <button onclick="resetQuiz()">Try Again</button>
        `;
    }
});

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
}

// Initialize the quiz
displayQuestion();

// Easter Egg Variables
let konamiIndex = 0;
let schoolOfRockIndex = 0;
let cloeIndex = 0;
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
const schoolOfRockText = 'ttttthhhhhheeeeee schooolllll of rock';
const cloeText = 'cloe';

// Create audio element for rock music
const rockMusic = new Audio('https://www.youtube.com/watch?v=3RqBeAMC7dI');
rockMusic.volume = 0.3; // Set volume to 30%

// Create dancing Jack Black GIF
const dancingJack = document.createElement('img');
dancingJack.src = 'https://media.tenor.com/8vUQJZxXZ8AAAAAd/jack-black-dancing.gif';
dancingJack.alt = 'Dancing Jack Black';
dancingJack.className = 'dancing-jack';

// Function to play rock music
function playRockMusic() {
    rockMusic.currentTime = 0; // Reset music to start
    rockMusic.play();
    // Stop music after 5 seconds
    setTimeout(() => {
        rockMusic.pause();
    }, 5000);
}

document.addEventListener('keydown', (e) => {
    // Konami Code Easter Egg
    if (e.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            showEasterEgg("🎸 Mr. Burr's Secret Message: Empathy makes us all rock stars! 🎸");
            playRockMusic();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }

    // School of Rock Text Easter Egg
    if (e.key === schoolOfRockText[schoolOfRockIndex]) {
        schoolOfRockIndex++;
        if (schoolOfRockIndex === schoolOfRockText.length) {
            showEasterEgg("🎸 " + schoolOfRockText.toUpperCase() + " 🎸");
            playRockMusic();
            schoolOfRockIndex = 0;
        }
    } else {
        schoolOfRockIndex = 0;
    }

    // Cloe Easter Egg
    if (e.key === cloeText[cloeIndex]) {
        cloeIndex++;
        if (cloeIndex === cloeText.length) {
            showEasterEgg("🎸 " + schoolOfRockText.toUpperCase() + " 🎸");
            playRockMusic();
            cloeIndex = 0;
        }
    } else {
        cloeIndex = 0;
    }
});

function showEasterEgg(message) {
    const easterEgg = document.createElement('div');
    easterEgg.className = 'easter-egg';
    
    // Add Jack Black dancing GIF
    const jackBlackGif = document.createElement('img');
    jackBlackGif.src = 'https://media.giphy.com/media/3o7TKF0LGhYx3xXqDe/giphy.gif';
    jackBlackGif.className = 'dancing-jack';
    jackBlackGif.alt = 'Dancing Jack Black';
    
    // Add message
    const messageElement = document.createElement('div');
    messageElement.className = 'easter-egg-message';
    messageElement.textContent = message;
    
    easterEgg.appendChild(jackBlackGif);
    easterEgg.appendChild(messageElement);
    
    document.body.appendChild(easterEgg);

    // Play music
    playRockMusic();

    setTimeout(() => {
        easterEgg.remove();
        rockMusic.pause();
    }, 5000); // Increased time to 5 seconds to enjoy the dance
}

// Rock Band Challenge Game
const bandGameContainer = document.getElementById('band-game');
const bandGameStatus = document.getElementById('band-game-status');
const bandGameScore = document.getElementById('band-game-score');
const startBandGame = document.getElementById('start-band-game');
const bandGameActions = document.getElementById('band-game-actions');
const bandGameResult = document.getElementById('band-game-result');

let bandScore = 0;
let currentChallenge = 0;

const bandChallenges = [
    {
        title: "Guitar Solo Challenge",
        description: "Your band needs to decide who gets the guitar solo. Flip a coin to choose between you and your bandmate!",
        type: "coin",
        success: "🎸 Rock on! You nailed the solo! +10 points",
        failure: "🎸 Your bandmate rocked it instead! +5 points",
        points: [10, 5]
    },
    {
        title: "Drum Roll Challenge",
        description: "Time for an epic drum solo! Roll the dice to determine how many beats you'll play!",
        type: "dice",
        success: "🥁 Perfect timing! You hit all the beats! +15 points",
        failure: "🥁 Almost there! You missed a few beats. +8 points",
        points: [15, 8]
    },
    {
        title: "Band Name Challenge",
        description: "Flip a coin to decide your band's name!",
        type: "coin",
        success: "🎸 Awesome! You're now 'The Rocking Rebels'! +12 points",
        failure: "🎸 Cool! You're now 'The Probability Punks'! +7 points",
        points: [12, 7]
    },
    {
        title: "Concert Duration",
        description: "Roll the dice to determine how long your concert will be!",
        type: "dice",
        success: "🎤 Epic! You're playing for hours! +20 points",
        failure: "🎤 Short but sweet! +10 points",
        points: [20, 10]
    }
];

function startBandChallenge() {
    bandScore = 0;
    currentChallenge = 0;
    bandGameScore.textContent = `Score: ${bandScore}`;
    bandGameStatus.textContent = "Game Started!";
    bandGameActions.style.display = "block";
    bandGameResult.textContent = "";
    showCurrentChallenge();
}

function showCurrentChallenge() {
    if (currentChallenge >= bandChallenges.length) {
        endBandGame();
        return;
    }

    const challenge = bandChallenges[currentChallenge];
    bandGameStatus.innerHTML = `
        <h3>${challenge.title}</h3>
        <p>${challenge.description}</p>
    `;

    if (challenge.type === "coin") {
        bandGameActions.innerHTML = `
            <button onclick="flipBandCoin()">Flip Coin</button>
        `;
    } else {
        bandGameActions.innerHTML = `
            <button onclick="rollBandDice()">Roll Dice</button>
        `;
    }
}

function flipBandCoin() {
    const result = Math.random() < 0.5 ? "heads" : "tails";
    const challenge = bandChallenges[currentChallenge];
    const points = result === "heads" ? challenge.points[0] : challenge.points[1];
    const message = result === "heads" ? challenge.success : challenge.failure;
    
    bandScore += points;
    bandGameScore.textContent = `Score: ${bandScore}`;
    bandGameResult.innerHTML = `
        <p>${message}</p>
        <p>You got ${points} points!</p>
    `;
    
    currentChallenge++;
    setTimeout(showCurrentChallenge, 2000);
}

function rollBandDice() {
    const result = Math.floor(Math.random() * 6) + 1;
    const challenge = bandChallenges[currentChallenge];
    const points = result >= 4 ? challenge.points[0] : challenge.points[1];
    const message = result >= 4 ? challenge.success : challenge.failure;
    
    bandScore += points;
    bandGameScore.textContent = `Score: ${bandScore}`;
    bandGameResult.innerHTML = `
        <p>You rolled a ${result}!</p>
        <p>${message}</p>
        <p>You got ${points} points!</p>
    `;
    
    currentChallenge++;
    setTimeout(showCurrentChallenge, 2000);
}

function endBandGame() {
    bandGameStatus.innerHTML = `
        <h3>Game Over!</h3>
        <p>Your final score: ${bandScore}</p>
        <p>${getBandGameFeedback(bandScore)}</p>
    `;
    bandGameActions.style.display = "none";
    startBandGame.style.display = "block";
}

function getBandGameFeedback(score) {
    if (score >= 50) return "🎸 You're a rock legend! Mr. Burr would be proud!";
    if (score >= 30) return "🎸 Great performance! You're on your way to stardom!";
    return "🎸 Keep practicing! Every rock star started somewhere!";
}

// Add event listener for the start button
startBandGame.addEventListener('click', startBandChallenge);

// Rock Band Battle Game
const battleGameContainer = document.getElementById('battle-game');
const battleStatus = document.getElementById('battle-status');
const playerHealth = document.getElementById('player-health');
const opponentHealth = document.getElementById('opponent-health');
const battleActions = document.getElementById('battle-actions');
const battleLog = document.getElementById('battle-log');
const startBattle = document.getElementById('start-battle');

let playerHP = 100;
let opponentHP = 100;
let currentOpponent = 0;
let specialAbilityCharges = 3;

const opponents = [
    {
        name: "🎸 The Rolling Stones",
        health: 100,
        image: "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-108048-20140618-stones-x1800-1403104561.jpg",
        attacks: [
            { name: "Satisfaction Strike", damage: [15, 25], probability: 0.6 },
            { name: "Paint It Black", damage: [20, 30], probability: 0.4 }
        ],
        special: { name: "Sympathy for the Devil", damage: 40, probability: 0.3 }
    },
    {
        name: "🎸 Led Zeppelin",
        health: 120,
        image: "https://www.rollingstone.com/wp-content/uploads/2018/06/led-zeppelin-iv-album-release-15b26d90-5ea8-4424-b555-0a6ddbf7e2f8.jpg",
        attacks: [
            { name: "Stairway to Heaven", damage: [18, 28], probability: 0.5 },
            { name: "Whole Lotta Love", damage: [22, 32], probability: 0.4 }
        ],
        special: { name: "Kashmir", damage: 45, probability: 0.25 }
    },
    {
        name: "🎸 Queen",
        health: 150,
        image: "https://www.rollingstone.com/wp-content/uploads/2018/06/queen-news-of-the-world-opener-c5bda6ed-abf1-42db-bc55-1023077c784e.jpg",
        attacks: [
            { name: "Bohemian Rhapsody", damage: [25, 35], probability: 0.4 },
            { name: "We Will Rock You", damage: [20, 30], probability: 0.5 }
        ],
        special: { name: "Another One Bites the Dust", damage: 50, probability: 0.2 }
    },
    {
        name: "🎸 AC/DC",
        health: 130,
        image: "https://www.rollingstone.com/wp-content/uploads/2018/06/acdc-back-in-black-35th-anniversary-f43d2c72-5326-4a8e-b9ff-5e22d7f31a40.jpg",
        attacks: [
            { name: "Highway to Hell", damage: [22, 32], probability: 0.5 },
            { name: "Thunderstruck", damage: [25, 35], probability: 0.4 }
        ],
        special: { name: "Back in Black", damage: 45, probability: 0.25 }
    },
    {
        name: "🎸 Guns N' Roses",
        health: 140,
        image: "https://media.pitchfork.com/photos/5929a7d7ea9e61561daa56a2/1:1/w_600/178c4698.jpg",
        attacks: [
            { name: "Welcome to the Jungle", damage: [24, 34], probability: 0.5 },
            { name: "Sweet Child O' Mine", damage: [20, 30], probability: 0.6 }
        ],
        special: { name: "November Rain Solo", damage: 48, probability: 0.22 }
    },
    {
        name: "🎸 Metallica",
        health: 160,
        image: "https://www.metallica.com/on/demandware.static/-/Sites-Metallica-Library/default/dw8c4cbd83/images/homepage/metallica-hero-new.jpg",
        attacks: [
            { name: "Enter Sandman", damage: [28, 38], probability: 0.45 },
            { name: "Master of Puppets", damage: [25, 35], probability: 0.5 }
        ],
        special: { name: "Nothing Else Matters", damage: 55, probability: 0.18 }
    },
    {
        name: "🎸 Pink Floyd",
        health: 145,
        image: "https://www.pinkfloyd.com/assets/pink-floyd-dark-side-of-the-moon.jpg",
        attacks: [
            { name: "Comfortably Numb", damage: [23, 33], probability: 0.55 },
            { name: "Money", damage: [21, 31], probability: 0.5 }
        ],
        special: { name: "The Wall", damage: 47, probability: 0.23 }
    },
    {
        name: "🎸 The Who",
        health: 135,
        image: "https://www.thewho.com/wp-content/uploads/2019/12/The-Who-Band.jpg",
        attacks: [
            { name: "Baba O'Riley", damage: [22, 32], probability: 0.5 },
            { name: "Won't Get Fooled Again", damage: [24, 34], probability: 0.45 }
        ],
        special: { name: "Pinball Wizard", damage: 46, probability: 0.24 }
    }
];

const playerAttacks = [
    { name: "🎸 Coin Flip Attack", type: "coin", damage: [15, 25] },
    { name: "🎲 Dice Roll Strike", type: "dice", damage: [10, 30] },
    { name: "🎯 Probability Blast", type: "random", damage: [5, 35] }
];

const specialAbilities = [
    {
        name: "🎸 Rock Revival",
        description: "Heal 30 HP and gain +10 to all attacks for 2 turns",
        effect: function() {
            playerHP = Math.min(100, playerHP + 30);
            addToBattleLog("🎸 You used Rock Revival! Healed 30 HP!");
            return true;
        }
    },
    {
        name: "🎸 Power Chord",
        description: "Deal 40 damage and stun opponent for 1 turn",
        effect: function() {
            opponentHP = Math.max(0, opponentHP - 40);
            addToBattleLog("🎸 You used Power Chord! Dealt 40 damage!");
            return true;
        }
    },
    {
        name: "🎸 Encore Performance",
        description: "Double your next attack's damage",
        effect: function() {
            addToBattleLog("🎸 You used Encore Performance! Next attack will be doubled!");
            return true;
        }
    }
];

function startBattleGame() {
    playerHP = 100;
    opponentHP = opponents[currentOpponent].health;
    specialAbilityCharges = 3;
    updateHealthBars();
    
    // Update opponent image and name
    document.querySelector('.opponent-image').src = opponents[currentOpponent].image;
    document.getElementById('opponent-character-name').textContent = opponents[currentOpponent].name;
    document.getElementById('opponent-name').textContent = opponents[currentOpponent].name;
    
    battleStatus.innerHTML = `<h3>Battle against ${opponents[currentOpponent].name}!</h3>`;
    battleActions.style.display = "block";
    battleLog.innerHTML = "";
    showBattleActions();
}

function updateHealthBars() {
    playerHealth.style.width = `${playerHP}%`;
    opponentHealth.style.width = `${opponentHP}%`;
    playerHealth.textContent = `${playerHP} HP`;
    opponentHealth.textContent = `${opponentHP} HP`;
}

function showBattleActions() {
    const specialAbilitiesHTML = specialAbilities.map((ability, index) => `
        <button onclick="useSpecialAbility(${index})" ${specialAbilityCharges <= 0 ? 'disabled' : ''}>
            ${ability.name} (${specialAbilityCharges} left)
        </button>
    `).join('');

    battleActions.innerHTML = `
        <div class="attack-buttons">
            ${playerAttacks.map((attack, index) => `
                <button onclick="playerAttack(${index})">${attack.name}</button>
            `).join('')}
        </div>
        <div class="special-abilities">
            <h4>Special Abilities</h4>
            ${specialAbilitiesHTML}
        </div>
    `;
}

function useSpecialAbility(index) {
    if (specialAbilityCharges <= 0) return;
    
    const ability = specialAbilities[index];
    if (ability.effect()) {
        specialAbilityCharges--;
        setTimeout(opponentAttack, 1000);
    }
}

function playerAttack(attackIndex) {
    const attack = playerAttacks[attackIndex];
    let damage = 0;
    let attackMessage = "";

    switch (attack.type) {
        case "coin":
            const coinResult = Math.random() < 0.5 ? "heads" : "tails";
            damage = coinResult === "heads" ? attack.damage[0] : attack.damage[1];
            attackMessage = `You flipped ${coinResult} and dealt ${damage} damage!`;
            break;
        case "dice":
            const diceRoll = Math.floor(Math.random() * 6) + 1;
            damage = Math.floor(attack.damage[0] + (diceRoll * (attack.damage[1] - attack.damage[0]) / 6));
            attackMessage = `You rolled a ${diceRoll} and dealt ${damage} damage!`;
            break;
        case "random":
            damage = Math.floor(Math.random() * (attack.damage[1] - attack.damage[0] + 1)) + attack.damage[0];
            attackMessage = `Your probability blast dealt ${damage} damage!`;
            break;
    }

    opponentHP = Math.max(0, opponentHP - damage);
    addToBattleLog(attackMessage);

    if (opponentHP <= 0) {
        endBattle(true);
        return;
    }

    setTimeout(opponentAttack, 1000);
}

function opponentAttack() {
    const opponent = opponents[currentOpponent];
    let attack;
    
    // 20% chance to use special attack
    if (Math.random() < 0.2 && opponent.special) {
        attack = opponent.special;
        if (Math.random() < attack.probability) {
            playerHP = Math.max(0, playerHP - attack.damage);
            addToBattleLog(`${opponent.name} used ${attack.name} and dealt ${attack.damage} damage!`);
        } else {
            addToBattleLog(`${opponent.name} tried to use ${attack.name} but missed!`);
        }
    } else {
        attack = opponent.attacks[Math.floor(Math.random() * opponent.attacks.length)];
        const success = Math.random() < attack.probability;
        
        if (success) {
            const damage = Math.floor(Math.random() * (attack.damage[1] - attack.damage[0] + 1)) + attack.damage[0];
            playerHP = Math.max(0, playerHP - damage);
            addToBattleLog(`${opponent.name} used ${attack.name} and dealt ${damage} damage!`);
        } else {
            addToBattleLog(`${opponent.name} tried to use ${attack.name} but missed!`);
        }
    }

    updateHealthBars();

    if (playerHP <= 0) {
        endBattle(false);
    }
}

function addToBattleLog(message) {
    const logEntry = document.createElement('div');
    logEntry.textContent = message;
    battleLog.appendChild(logEntry);
    battleLog.scrollTop = battleLog.scrollHeight;
}

function endBattle(playerWon) {
    battleActions.style.display = "none";
    
    if (playerWon) {
        if (currentOpponent < opponents.length - 1) {
            currentOpponent++;
            battleStatus.innerHTML = `
                <h3>Victory! 🎸</h3>
                <p>You defeated ${opponents[currentOpponent - 1].name}!</p>
                <button onclick="startBattleGame()">Battle ${opponents[currentOpponent].name}</button>
            `;
        } else {
            battleStatus.innerHTML = `
                <h3>You're a Rock Legend! 🎸</h3>
                <p>You defeated all opponents!</p>
                <button onclick="resetBattleGame()">Play Again</button>
            `;
        }
    } else {
        battleStatus.innerHTML = `
            <h3>Game Over! 🎸</h3>
            <p>${opponents[currentOpponent].name} defeated you!</p>
            <button onclick="resetBattleGame()">Try Again</button>
        `;
    }
}

function resetBattleGame() {
    currentOpponent = 0;
    startBattleGame();
}

// Add event listener for the start button
startBattle.addEventListener('click', startBattleGame);

// 8-bit Rock Band Quest Game
class RockBandQuest {
    constructor() {
        this.canvas = document.getElementById('game-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.selectedCharacter = 'dewey';
        this.characterStats = {
            dewey: { speed: 5, jumpForce: 15, noteBonus: 1 },
            stones: { speed: 6, jumpForce: 14, noteBonus: 1.2 },
            zeppelin: { speed: 4, jumpForce: 18, noteBonus: 1.5 },
            queen: { speed: 5, jumpForce: 16, noteBonus: 2 },
            acdc: { speed: 7, jumpForce: 13, noteBonus: 1.1 },
            gnr: { speed: 6, jumpForce: 16, noteBonus: 1.3 },
            metallica: { speed: 5, jumpForce: 14, noteBonus: 1.4 },
            floyd: { speed: 4, jumpForce: 17, noteBonus: 1.8 }
        };
        
        this.player = {
            x: 50,
            y: this.canvas.height / 2,
            width: 32,
            height: 32,
            speed: 5,
            jumpForce: 8,
            velocityY: 0,
            isJumping: false,
            isRunning: false,
            currentFrame: 0,
            frameCount: 0,
            powerActive: false,
            powerDuration: 0,
            direction: 1,
            rotation: 0
        };

        this.notes = [];
        this.obstacles = [];
        this.score = 0;
        this.notesCollected = 0;
        this.lives = 3;
        this.gameOver = false;
        this.keys = {};
        this.gravity = 0.5;
        this.ground = this.canvas.height - 30;
        this.spawnInterval = 2000;
        this.lastSpawn = 0;
        this.gameLoop = null;
        this.pipes = [];
        this.pipeGap = 150;
        this.pipeWidth = 80;
        this.pipeSpeed = 3;
    }

    draw() {
        this.clearCanvas();
        
        // Draw player with rotation
        this.ctx.save();
        this.ctx.translate(this.player.x + this.player.width/2, this.player.y + this.player.height/2);
        this.ctx.rotate(this.player.rotation * Math.PI / 180);
        this.ctx.fillStyle = this.player.powerActive ? '#ffd700' : '#fff';
        this.ctx.fillRect(-this.player.width/2, -this.player.height/2, this.player.width, this.player.height);
        this.ctx.restore();
        
        // Draw pipes
        this.pipes.forEach(pipe => {
            this.ctx.fillStyle = '#2ecc71';
            // Top pipe
            this.ctx.fillRect(pipe.x, 0, this.pipeWidth, pipe.topHeight);
            // Bottom pipe
            this.ctx.fillRect(pipe.x, pipe.topHeight + this.pipeGap, this.pipeWidth, this.canvas.height - pipe.topHeight - this.pipeGap);
        });
        
        // Draw notes
        this.notes.forEach(note => {
            this.ctx.beginPath();
            this.ctx.arc(note.x + note.width/2, note.y + note.height/2, note.width/2, 0, Math.PI * 2);
            this.ctx.fillStyle = '#ffd700';
            this.ctx.fill();
            this.ctx.strokeStyle = '#fff';
            this.ctx.stroke();
            
            // Add glow effect
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = '#ffd700';
        });
        
        // Reset shadow for other drawings
        this.ctx.shadowBlur = 0;
        
        // Draw ground
        this.ctx.fillStyle = '#444';
        this.ctx.fillRect(0, this.ground, this.canvas.width, 30);
        
        // Draw power-up effect
        if (this.player.powerActive) {
            this.ctx.strokeStyle = '#ffd700';
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(
                this.player.x - 2,
                this.player.y - 2,
                this.player.width + 4,
                this.player.height + 4
            );
        }
    }

    handleInput() {
        if (this.keys['ArrowUp'] || this.keys[' ']) {
            this.player.velocityY = -this.player.jumpForce;
            this.player.rotation = -30;
        }
    }

    updatePlayer() {
        // Apply gravity
        this.player.velocityY += this.gravity;
        this.player.y += this.player.velocityY;
        
        // Rotate based on velocity with less dramatic rotation
        this.player.rotation = Math.min(90, Math.max(-30, this.player.velocityY * 2));
        
        // Check for ground collision
        if (this.player.y + this.player.height > this.ground) {
            this.player.y = this.ground - this.player.height;
            this.player.velocityY = 0;
            this.player.rotation = 0;
        }
        
        // Check for ceiling collision
        if (this.player.y < 0) {
            this.player.y = 0;
            this.player.velocityY = 0;
        }
    }

    spawnPipes() {
        const now = Date.now();
        if (now - this.lastSpawn > this.spawnInterval) {
            const topHeight = Math.random() * (this.canvas.height - this.pipeGap - 100) + 50;
            this.pipes.push({
                x: this.canvas.width,
                topHeight: topHeight,
                passed: false
            });
            this.lastSpawn = now;
        }
    }

    updatePipes() {
        this.pipes = this.pipes.filter(pipe => {
            pipe.x -= this.pipeSpeed;
            
            // Check if pipe is passed
            if (!pipe.passed && pipe.x + this.pipeWidth < this.player.x) {
                pipe.passed = true;
                this.score += 1;
                this.updateStats();
            }
            
            return pipe.x > -this.pipeWidth;
        });
    }

    checkPipeCollisions() {
        for (const pipe of this.pipes) {
            // Check if player is within pipe's x-range
            if (this.player.x + this.player.width > pipe.x && this.player.x < pipe.x + this.pipeWidth) {
                // Check if player hits top pipe
                if (this.player.y < pipe.topHeight) {
                    this.lives--;
                    this.updateStats();
                    if (this.lives <= 0) {
                        this.endGame();
                    }
                    return;
                }
                // Check if player hits bottom pipe
                if (this.player.y + this.player.height > pipe.topHeight + this.pipeGap) {
                    this.lives--;
                    this.updateStats();
                    if (this.lives <= 0) {
                        this.endGame();
                    }
                    return;
                }
            }
        }
    }

    update() {
        this.clearCanvas();
        this.handleInput();
        this.updatePlayer();
        this.updatePowerups();
        this.spawnPipes();
        this.updatePipes();
        this.checkPipeCollisions();
        this.spawnObjects();
        this.updateObjects();
        this.checkCollisions();
        this.draw();
    }

    clearCanvas() {
        this.ctx.fillStyle = '#000';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    spawnObjects() {
        const now = Date.now();
        if (now - this.lastSpawn > this.spawnInterval) {
            if (Math.random() < 0.7) {
                this.notes.push({
                    x: this.canvas.width,
                    y: Math.random() * (this.ground - 50) + 25,
                    width: 20,
                    height: 20,
                    speed: 3
                });
            } else {
                this.obstacles.push({
                    x: this.canvas.width,
                    y: this.ground - 30,
                    width: 30,
                    height: 30,
                    speed: 4
                });
            }
            this.lastSpawn = now;
        }
    }

    updateObjects() {
        // Update notes
        this.notes = this.notes.filter(note => {
            note.x -= note.speed;
            return note.x > -note.width;
        });

        // Update obstacles
        this.obstacles.forEach(obstacle => {
            obstacle.x -= obstacle.speed;
            return obstacle.x > -obstacle.width;
        });
    }

    checkCollisions() {
        // Check note collisions with character bonus
        this.notes = this.notes.filter(note => {
            if (this.isColliding(this.player, note)) {
                const bonus = this.characterStats[this.selectedCharacter].noteBonus;
                this.score += Math.floor(10 * bonus);
                this.notesCollected++;
                this.updateStats();
                
                // Special effects based on character
                this.activateCharacterPower();
                return false;
            }
            return true;
        });

        // Check obstacle collisions
        this.obstacles.forEach(obstacle => {
            if (this.isColliding(this.player, obstacle)) {
                this.lives--;
                this.updateStats();
                if (this.lives <= 0) {
                    this.endGame();
                }
                obstacle.x = -obstacle.width; // Remove obstacle
            }
        });
    }

    isColliding(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
               rect1.x + rect1.width > rect2.x &&
               rect1.y < rect2.y + rect2.height &&
               rect1.y + rect1.height > rect2.y;
    }

    updateStats() {
        document.getElementById('quest-score').textContent = this.score;
        document.getElementById('notes-collected').textContent = this.notesCollected;
        document.getElementById('lives').textContent = this.lives;
    }

    endGame() {
        clearInterval(this.gameLoop);
        this.gameOver = true;
        
        const gameOverScreen = document.createElement('div');
        gameOverScreen.className = 'game-over';
        gameOverScreen.innerHTML = `
            <h2>Game Over!</h2>
            <p>Final Score: ${this.score}</p>
            <p>Notes Collected: ${this.notesCollected}</p>
            <button onclick="this.parentElement.remove(); rockBandQuest.startGame()">Play Again</button>
        `;
        document.querySelector('.game-container').appendChild(gameOverScreen);
    }

    activateCharacterPower() {
        if (this.player.powerActive) return;

        switch (this.selectedCharacter) {
            case 'stones':
                // Satisfaction boost: Temporary speed increase
                this.player.speed *= 1.5;
                this.player.powerActive = true;
                this.player.powerDuration = 120; // 2 seconds at 60fps
                break;
            case 'zeppelin':
                // Stairway to Heaven: Higher jumps
                this.player.jumpForce *= 1.3;
                this.player.powerActive = true;
                this.player.powerDuration = 180;
                break;
            case 'queen':
                // Champions: Score multiplier
                this.player.powerActive = true;
                this.player.powerDuration = 150;
                break;
            case 'acdc':
                // High Voltage: Faster movement and collection
                this.player.speed *= 1.7;
                this.player.powerActive = true;
                this.player.powerDuration = 90;
                break;
            case 'gnr':
                // Welcome to the Jungle: All stats boost
                this.player.speed *= 1.3;
                this.player.jumpForce *= 1.2;
                this.player.powerActive = true;
                this.player.powerDuration = 100;
                break;
            case 'metallica':
                // Master of Puppets: Control nearby notes
                this.attractNotes();
                this.player.powerActive = true;
                this.player.powerDuration = 60;
                break;
            case 'floyd':
                // Dark Side: Time slow effect
                this.slowTime();
                this.player.powerActive = true;
                this.player.powerDuration = 200;
                break;
        }
    }

    updatePowerups() {
        if (this.player.powerActive) {
            this.player.powerDuration--;
            if (this.player.powerDuration <= 0) {
                this.deactivateCharacterPower();
            }
        }
    }

    deactivateCharacterPower() {
        const stats = this.characterStats[this.selectedCharacter];
        this.player.speed = stats.speed;
        this.player.jumpForce = stats.jumpForce;
        this.player.powerActive = false;
    }

    attractNotes() {
        this.notes.forEach(note => {
            const dx = this.player.x - note.x;
            const dy = this.player.y - note.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                note.x += dx * 0.1;
                note.y += dy * 0.1;
            }
        });
    }

    slowTime() {
        this.notes.forEach(note => note.speed *= 0.5);
        this.obstacles.forEach(obstacle => obstacle.speed *= 0.5);
    }

    init() {
        // Add character selection event listeners
        document.querySelectorAll('.character-option').forEach(option => {
            option.addEventListener('click', () => {
                this.selectedCharacter = option.dataset.character;
                document.querySelectorAll('.character-option').forEach(opt => opt.classList.remove('selected'));
                option.classList.add('selected');
                
                // Update player stats based on selected character
                const stats = this.characterStats[this.selectedCharacter];
                this.player.speed = stats.speed;
                this.player.jumpForce = stats.jumpForce;
            });
        });

        // Add event listeners
        document.getElementById('start-quest').addEventListener('click', () => this.startGame());
        document.addEventListener('keydown', (e) => this.keys[e.key] = true);
        document.addEventListener('keyup', (e) => this.keys[e.key] = false);
        
        // Mobile controls
        const leftBtn = document.getElementById('left-btn');
        const rightBtn = document.getElementById('right-btn');
        const jumpBtn = document.getElementById('jump-btn');
        
        // Touch events for mobile
        leftBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.keys['ArrowLeft'] = true;
        });
        rightBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.keys['ArrowRight'] = true;
        });
        jumpBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.keys['ArrowUp'] = true;
        });
        
        leftBtn.addEventListener('touchend', () => this.keys['ArrowLeft'] = false);
        rightBtn.addEventListener('touchend', () => this.keys['ArrowRight'] = false);
        jumpBtn.addEventListener('touchend', () => this.keys['ArrowUp'] = false);
        
        // Mouse events for desktop
        leftBtn.addEventListener('mousedown', () => this.keys['ArrowLeft'] = true);
        rightBtn.addEventListener('mousedown', () => this.keys['ArrowRight'] = true);
        jumpBtn.addEventListener('mousedown', () => this.keys['ArrowUp'] = true);
        
        leftBtn.addEventListener('mouseup', () => this.keys['ArrowLeft'] = false);
        rightBtn.addEventListener('mouseup', () => this.keys['ArrowRight'] = false);
        jumpBtn.addEventListener('mouseup', () => this.keys['ArrowUp'] = false);
    }

    startGame() {
        this.resetGame();
        this.gameLoop = setInterval(() => this.update(), 1000/60);
    }

    resetGame() {
        this.player = {
            x: 50,
            y: this.canvas.height / 2,
            width: 32,
            height: 32,
            speed: 5,
            jumpForce: 8,
            velocityY: 0,
            isJumping: false,
            isRunning: false,
            currentFrame: 0,
            frameCount: 0,
            powerActive: false,
            powerDuration: 0,
            direction: 1,
            rotation: 0
        };
        this.notes = [];
        this.obstacles = [];
        this.score = 0;
        this.notesCollected = 0;
        this.lives = 3;
        this.gameOver = false;
        this.updateStats();
    }
}

// Initialize the game
const rockBandQuest = new RockBandQuest();
rockBandQuest.init(); 