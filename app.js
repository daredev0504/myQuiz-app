//mobile navigation starts
let mobileOpen=()=> {
    let openNav=document.getElementById('mobileO');
    openNav.style.width='100%';
    openNav.style.opacity='90%';
}
let mobileClose=()=> {
    let closeNav=document.getElementById('mobileO');
    closeNav.style.width='0';
}
//mobile navigation ends

//quiz codes
const question=document.getElementById('question');//gets the question container
question.style.color='white';//changes the text to white
const options=Array.from(document.getElementsByClassName('options-answer')); //create an array from the option items
const displayText=document.getElementById('display-score');
const scoreText=document.getElementById('score');
const nextButon=document.getElementById('next-btn')


let currentQuestion={};//create an empty object to hold the 
let answerDelay=false;
let scoreCounter=0;//declare a score counter variable that updates the score as the user goes with the quiz
let questionCounter=0;//declare a variable that count the question index
let remainingQuestions=[];//delares an empty array to hold our question in a dynamic fashion

//loaded 5 questions in an array of objects
let questions=[
    {
        Question:"what's the capital of zimbabwe",
        option1:'dakar', 
        option2:'brazaville', 
        option3:'harare', 
        option4:'lome', 
        answer:3
    },
    {
        Question:"what's the capital of brazil",
        option1:'sao-paulo', 
        option2:'santos', 
        option3:'rio de janeiro', 
        option4:'brazilia', 
        answer:4
    },
    {
        Question:"what's the capital of ukraine",
        option1:'shaktar', 
        option2:'donesk', 
        option3:'kiev', 
        option4:'dinamo', 
        answer:3
    },
    {
        Question:"what's the capital of new-zealand",
        option1:'watakere', 
        option2:'auckland', 
        option3:'neptic city', 
        option4:'danland', 
        answer:2
    },
    {
        Question:"what's the capital of sweden",
        option1:'stockholm', 
        option2:'quintin', 
        option3:'norrkoping', 
        option4:'olso', 
        answer:1
    }
];

const correctPoints=100;//a constant score for each question
const maxQuestions=5;//number of questions

//nextButon.addEventListener('click',);

let quizApp=()=>{
    //the main quiz function
    
    questionCounter=0;
    scoreCounter=0;
    remainingQuestions=[...questions];//copy the questions from the question array
    console.log(remainingQuestions);
   getNextQuestion();
};

let getNextQuestion=()=>{
    if (remainingQuestions.length===0){
        //go to end of the game
      return window.location.assign('endgame.html');
   }; 
    questionCounter++;
    displayText.innerText=`${questionCounter}/${maxQuestions}`;
   
    const questionNum=Math.floor(Math.random()*remainingQuestions.length);//picks a question at random
    currentQuestion=remainingQuestions[questionNum];//assigns the random question to the current question the user is 
    question.innerText=currentQuestion.Question.toUpperCase();//access the question property of the currentQuestion object and inserts it into the question element

    options.forEach(option=>{
       const num=option.dataset['num'];
       option.innerText=currentQuestion['option'+num];
    });
 //  options.forEach(optionFunct);
   // optionFunct=(item)=>{
      // const num=item.dataset['num'];
       //item.innerText=currentQuestion['item'+num];
   remainingQuestions.splice(questionNum,1);
    //answerDelay=true;
};

options.forEach(option=>{
    option.addEventListener('click',e=>{//for each click,the following are executed
        const selectedOption=e.target;//returns the options
        const selectedAnswer=selectedOption.dataset['num'];
      // console.log(selectedAnswer==currentQuestion.answer);

       const answerValidation=(selectedAnswer==currentQuestion.answer)?'correct':'incorrect';
        //console.log(answerValidation);
        selectedOption.parentElement.classList.add(answerValidation);
        setTimeout(()=>{
            selectedOption.parentElement.classList.remove(answerValidation);
            if(answerValidation=='correct'){
                incrementScore(correctPoints); 
            }
           getNextQuestion();
        },1000)
     
        
    });
})

    incrementScore=num=>{
        scoreCounter+=num;
        scoreText.innerText=scoreCounter;
    }
quizApp();
