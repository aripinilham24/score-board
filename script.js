let homeScore = document.querySelector('.home .score-display');
let guestScore = document.querySelector('.guest .score-display');
let scoreBtnHome = document.querySelector('.update-score-home');
let scoreBtnGuest = document.querySelector('.update-score-guest');
let resetBtn = document.querySelector('button[type="reset"]');
let select = document.querySelector('select');

let scoreHome = 0;
let scoreGuest = 0;
let scoreWin = Infinity;
let isGameOver = false;

scoreBtnGuest.disabled = scoreBtnHome.disabled = true;

select.addEventListener('change', () => {
    scoreWin = parseInt(select.value);
    scoreBtnGuest.disabled = scoreBtnHome.disabled = false;
    homeScore.style.color = guestScore.style.color = 'white';
    isGameOver = false;
});

function updateScore(score, displayScore) {
    if (!isGameOver) {
        score += 1;
        displayScore.innerHTML = score;
        if (score === scoreWin) {
            isGameOver = true;
            displayScore.style.color = 'green';
        }
    }
    return score;
}

scoreBtnHome.addEventListener('click', () => {
    scoreHome = updateScore(scoreHome, homeScore);
});
scoreBtnGuest.addEventListener('click', () => {
    scoreGuest = updateScore(scoreGuest, guestScore);
});

resetBtn.addEventListener('click', () => {
    scoreHome = scoreGuest = 0;
    homeScore.innerHTML = scoreHome;
    guestScore.innerHTML = scoreGuest;
    select.selectedIndex = 0;
    scoreWin = Infinity
    isGameOver = false;
    homeScore.style.color = guestScore.style.color = 'white';
});
