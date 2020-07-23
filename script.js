// Handling the timer as well as the start button
let button = document.getElementById('startBtn'); // Start Button
let countdown = document.getElementById('countdown'); // Timer


let second = 30;
let score = 0;
button.addEventListener('click', function(ev){
    ev.stopPropagation();
    document.getElementById('question').style.display = 'none';
    document.getElementById('startBtn').style.display = "none"; 
    clear = setInterval(updateCountdown,1000),
    quiz();
})

function updateCountdown(ev){
    second--;
    countdown.innerHTML = `Time remaining: ${second}`;

    if(second == 0 || second < 0){
        alert('Time is up!'),
        clearInterval(clear);
    }
}

// Question portion


var questions=[
    {
        prompt:"Which company developed JavaScript?",
        choices:["Netscape", "Apple", 'Nabisco', "Windows"],
        answer: 'Netscape'
    },
    {
        prompt:"Which symbol is used for single line comments in Javascript?",
        choices:["//","/* */", "()", "~~"],
        answer: "//"
    },
    {
        prompt:"What would be considered a string?",
        choices: ["this", '\"no this\"', "+wait+", '4'],
        answer: "\"no this\"" 
    },
    {
        prompt: "What would be the result of \'3 + 2\'?",
        choices: ["32", '5', '23', "\'3+2\'"],
        answer: "\'3+2\'"
    },
    {
        prompt: "Is Javascript case sensitive?",
        choices: ["Yes", "No"],
        answer: "Yes"
    },
    {
        prompt: "How can I add a new element and the end of an array in javascript?",
        choices: ["Pull method", "Push method", "Jump method", "Idk method"],
        answer: "Push method"
    },
];


let currentQuestion = 0;

// Top, Center, and Bottom of the test portion
let questionPrompt = document.getElementById('container');
let options = document.getElementById('answers');
let bottomPrompt = document.getElementById('bottom');

function quiz (){
    let question = questions[currentQuestion];
    questionPrompt.innerHTML = "";

    let newQuestion = document.createElement('h4');
    newQuestion.innerHTML = question.prompt;
    questionPrompt.appendChild(newQuestion);



    for(i = 0; i < question.choices.length; i++ ){
        let answersLi = document.createElement('button');
        answersLi.innerHTML = question.choices[i];
        options.appendChild(answersLi);
        answersLi.className = "answersLi";
    }   
}

options.addEventListener('click', function(event){
    //console.log(event.target.innerText)
    event.stopPropagation();
    event.preventDefault();
    var answer = event.target.innerText;
    var question = questions[currentQuestion];
    if(currentQuestion > questions.length || second < 0){ 
        endQuiz();
    }else{

if(answer === question.answer){
    score++;
    bottomPrompt.innerHTML = "Correct!";
}else{
    second = second - 10;
    bottomPrompt.innerHTML = "Wrong! You lost ten seconds.";
}
currentQuestion++;
options.innerHTML = '';
quiz();
}     

})



function endQuiz(){
    options.innerHTML = '';
    questionPrompt.innerHTML = "Thanks for taking our test";
    bottomPrompt.innerHTML = `Please enter your first name..Your score is:  ${score}`;
    document.getElementById('final-form').style.display = "block"
}