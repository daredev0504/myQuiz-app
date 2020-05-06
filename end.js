let totalScore=document.getElementById('total-score');
let finalScore=document.getElementsByClassName('final-score');
//console.log(finalScore);
totalScore.innerHTML='your final score';
totalScore.className='final-text';

const recentScore=localStorage.getItem('recentScore');