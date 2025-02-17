const questions = [
    {
        question: "What is larget animal in the world?",
        answers:[
            {text: "Elephant", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Shark", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "What is the smallest country in the world?",
        answers:[
            {text: "VAtican City", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Shri Lanka", correct: false},
        ]
    },
    {
        question: "What is the capital of India?",
        answers:[
            {text: "Mumbai", correct: false},
            {text: "Delhi", correct: true},
            {text: "Kolkata", correct: false},
            {text: "Chennai", correct: false},
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers:[
            {text: "Melbourne", correct: false},
            {text: "Sydney", correct: false},
            {text: "Canberra", correct: true},
            {text: "Perth", correct: false},
        ]
    },
    {
        question: "What is the capital of Japan?",
        answers:[
            {text: "Tokyo", correct: true},
            {text: "Osaka", correct: false},
            {text: "Kyoto", correct: false},
            {text: "Hiroshima", correct: false},
        ]
    },

    {
        question: "What is the capital of USA?",
        answers:[
            {text: "New York", correct: false},
            {text: "Washington DC", correct: true},
            {text: "Los Angeles", correct: false},
            {text: "Chicago", correct: false},
        ]
    },
    {
        question: "What is the capital of Russia?",
        answers:[
            {text: "Moscow", correct: true},
            {text: "St. Petersburg", correct: false},
            {text: "Kazan", correct: false},
            {text: "Vladivostok", correct: false},
        ]
    },
    {
        question: "What is the capital of China?", 
        answers:[
            {text: "Beijing", correct: true},
            {text: "Shanghai", correct: false},
            {text: "Guangzhou", correct: false},
            {text: "Shenzhen", correct: false},
        ]
    },

    {
        question: "What is the capital of Brazil?",
        answers:[
            {text: "Sao Paulo", correct: false},
            {text: "Rio de Janeiro", correct: false},
            {text: "Brasilia", correct: true},
            {text: "Salvador", correct: false},
        ]
    },
    {
        question: "What is the capital of Canada?",
        answers:[
            {text: "Toronto", correct: false},
            {text: "Vancouver", correct: false},
            {text: "Montreal", correct: false},
            {text: "Ottawa", correct: true},
        ]
    },

    {
        question: "What is the capital of France?",
        answers:[
            {text: "Paris", correct: true},
            {text: "Lyon", correct: false},
            {text: "Nice", correct: false},
            {text: "Marseille", correct: false},
        ]
    },
    {
        question: "What is the capital of Germany?",
        answers:[
            {text: "Berlin", correct: true},
            {text: "Munich", correct: false},
            {text: "Hamburg", correct: false},
            {text: "Frankfurt", correct: false},
        ]

    },

    {
        question: "What is the capital of Italy?",
        answers:[
            {text: "Rome", correct: true},
            {text: "Milan", correct: false},
            {text: "Venice", correct: false},
            {text: "Florence", correct: false},
        ]
    },
    {
        question: "What is the capital of Spain?",
        answers:[
            {text: "Madrid", correct: true},
            {text: "Barcelona", correct: false},
            {text: "Valencia", correct: false},
            {text: "Seville", correct: false},
        ]
    },
    {
        question: "What is the capital of South Africa?",
        answers:[
            {text: "Johannesburg", correct: false},
            {text: "Cape Town", correct: false},
            {text: "Pretoria", correct: true},
            {text: "Durban", correct: false},
        ]
    },
    {
        question: "What is the capital of Argentina?",
        answers:[
            {text: "Buenos Aires", correct: true},
            {text: "Cordoba", correct: false},
            {text: "Rosario", correct: false},
            {text: "Mendoza", correct: false},
        ]
    },
    {
        question: "What is the capital of Egypt?",
        answers:[
            {text: "Cairo", correct: true},
            {text: "Alexandria", correct: false},
            {text: "Luxor", correct: false},
            {text: "Aswan", correct: false},
        ]
    },
    {
        question: "What is the capital of Saudi Arabia?",
        answers:[
            {text: "Riyadh", correct: true},
            {text: "Jeddah", correct: false},
            {text: "Mecca", correct: false},
            {text: "Medina", correct: false},
        ]
    },
    {
        question: "What is the capital of Pakistan?",
        answers:[
            {text: "Karachi", correct: false},
            {text: "Lahore", correct: false},
            {text: "Islamabad", correct: true},
            {text: "Peshawar", correct: false},
        ]
    },
    {
        question: "What is the capital of Bangladesh?",
        answers:[
            {text: "Dhaka", correct: true},
            {text: "Chittagong", correct: false},
            {text: "Khulna", correct: false},
            {text: "Rajshahi", correct: false},
        ]
    },
    {
        question: "What is the capital of Nepal?",
        answers:[
            {text: "Kathmandu", correct: true},
            {text: "Pokhara", correct: false},
            {text: "Biratnagar", correct: false},
            {text: "Birgunj", correct: false},
        ]
    },
    {
        question: "What is the capital of Bhutan?",
        answers:[
            {text: "Thimphu", correct: true},
            {text: "Paro", correct: false},
            {text: "Punakha", correct: false},
            {text: "Jakar", correct: false},
        ]
    },
    {
        question: "What is the capital of Sri Lanka?",
        answers:[
            {text: "Colombo", correct: false},
            {text: "Kandy", correct: false},
            {text: "Galle", correct: false},
            {text: "Sri Jayawardenepura Kotte", correct: true},
        ]
    },
    {
        question: "What is the capital of Thailand?",
        answers:[
            {text: "Bangkok", correct: true},
            {text: "Chiang Mai", correct: false},
            {text: "Pattaya", correct: false},
            {text: "Phuket", correct: false},
        ]
    },
    {
        question: "What is the capital of Malaysia?",
        answers:[
            {text: "Kuala Lumpur", correct: true},
            {text: "Penang", correct: false},
            {text: "Ipoh", correct: false},
            {text: "Johor Bahru", correct: false},
        ]
    },
    {
        question: "What is the capital of Singapore?",
        answers:[
            {text: "Singapore", correct: true},
            {text: "Sentosa", correct: false},
            {text: "Marina Bay", correct: false},
            {text: "Orchard Road", correct: false},
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
       answerButtons.appendChild(button);
       if(answer.correct){
           button.dataset.correct = answer.correct;
       }
       button.addEventListener('click', selectAnswer);
    });
}



function resetState(){
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
        
    
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;

    });
    nextButton.style.display = 'block';
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = 'block';
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener('click', () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
        
}else{
    startQuiz();
}
});
startQuiz();