window.addEventListener('load',initialize)
//level
const levels ={
	easy:7,
	medium:5,
	hard:3
}

// change levels
let currentLevel = levels.easy;
let time = currentLevel,
	score = 0,
	isPlaying;

//dom elements
const wordInput = document.querySelector('#input');
const chosenTime = document.querySelector('#time');
const message = document.querySelector('#message');
const timeLeft = document.querySelector('#time-left');
const scoreDisplay = document.querySelector('#score');
const currentWord = document.querySelector('#current-word');
const difficultyLevels = document.querySelector('#level');

difficultyLevels.addEventListener('change',changeLevel)

//words array
const words = [
	'words',
	'hello',
	'seconds',
	'computer',
	'bread',
	'juice',
	'toppers',
	'bottom',
	'laptop',
	'minute',
	'hours',
	'economics',
	'people',
	'wayside',
	'roads',
	'internet',
	'supper',
	'glue',
	'introspective',
	'retrospective',
	'initialize',
	'output',
	'wash',
	'insult',
	'exacerbate',
	'aggrevate',
	'compound',
	'intensify',
	'enormity',
	'disinterested',
	'pert',
	'penchant',
	'plethora'
];

//game initialization
function initialize (){
	//show seconds
	chosenTime.innerHTML = currentLevel;
	//load a word from array randomly
	loadWord(words);
	//start matching when input given
	wordInput.addEventListener('input',startMatch);
	//countdown everysecond
	setInterval(countDown, 1000);
	//check game status
	setInterval(checkStatus,50)
}

function loadWord(words){
	//generate random index
	const randomIndex = Math.floor(Math.random()*words.length);
	//output random
	currentWord.innerHTML = words[randomIndex];
}

function countDown(){
	//checking that time isnt run out
	if(time > 0){
		time--;
	}else if(time == 0){
		isPlaying = false;
	}
	//display time left
	timeLeft.innerHTML = time;
}

function checkStatus(){
	if(!isPlaying && time === 0){
		message.innerHTML = 'Game over!!!';
		score = -1;
	}
}

function startMatch(){
	if(matchWords()){
		isPlaying = true;
		time = currentLevel+1;
		loadWord(words);
		wordInput.value = '';
		score++;
	}
	if(score === -1){
		score.innerHTML = 0;
	}else{
		scoreDisplay.innerHTML = score;
	}
}

function matchWords(){
	if(wordInput.value === currentWord.innerHTML){
			message.innerHTML = 'Correct!!!!'
			return true;
		}else{
			message.innerHTML = '';
			return false;
		}
}

function changeLevel(e){
	let level = e.target.value
	if(level === 'medium'){
		wordInput.focus();
		score = 0;
		message.innerHTML = '';
		isPlaying =true;
		currentLevel = levels.medium;
		chosenTime.innerHTML = currentLevel; 
		time = currentLevel+1;
		startMatch();
	}else if(level == 'hard'){
		wordInput.focus();
		score = 0;
		message.innerHTML = '';
		isPlaying =true;
		currentLevel = levels.hard;
		chosenTime.innerHTML = currentLevel; 
		time = currentLevel+1;
		startMatch();
	}else if(level == 'easy'){
		wordInput.focus();
		score = 0;
		message.innerHTML = '';
		isPlaying =true;
		currentLevel = levels.easy;
		chosenTime.innerHTML = currentLevel; 
		time = currentLevel+1;
		startMatch();
	}
}
