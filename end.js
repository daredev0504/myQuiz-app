let totalScore=document.getElementById('total-score');
const finalScore=document.getElementById('final-score');
//console.log(finalScore);
totalScore.innerHTML='your final score';
totalScore.className='final-text';
finalScore.className='final-text';

const recentScore=localStorage.getItem('recentScore');
finalScore.innerText=recentScore;