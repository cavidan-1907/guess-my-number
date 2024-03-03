// HTML-də olan elementləri seçirik
let myNumDiv = document.getElementById('num'); // Rəqəm divi
let scoreDiv = document.getElementById('score'); // Nəticə divi
let highscoreDiv = document.getElementById('highscore'); // Ən yüksək nəticə divi
let numInp = document.getElementById('my-number'); // İstifadəçinin daxil etdiyi rəqəm inputu
let checkBtn = document.getElementById('check'); // Yoxlama düyməsi
let alertDiv = document.getElementById('alert'); // Bildiriş divi
let restartButton = document.getElementById('restart'); // Yenidən başlama düyməsi

// Global dəyişənlər və təsadüfi bir rəqəmin təyin edilməsi
let guessNum = 0; // İstifadəçinin təxmin etdiyi rəqəm
let number = Math.round(Math.random() * 20); // Təsadüfi rəqəm
let score = 10; // Nəticə
let highscore = localStorage.getItem('highscore') ? localStorage.getItem('highscore') : 0; // Ən yüksək nəticə, lokal saxlanır
scoreDiv.innerText = `Nəticə - ${score}`; // Nəticənin göstərilməsi
highscoreDiv.innerText = `Ən Yüksək Nəticə - ${highscore}`; // Ən yüksək nəticənin göstərilməsi

// İnputa rəqəm daxil olduqda
numInp.addEventListener('input', (e) => {
    guessNum = e.target.value;
});
console.log(number);
// Yoxlama düyməsinə basdıqda
checkBtn.addEventListener('click', () => {
    // Nəticə 0-dan böyük olduğu müddətdə
    if (score > 0) {
        // Təxmin düzgün olarsa
        if (guessNum == number) {
            alertDiv.innerText = "Doğru rəqəm";
            document.body.style.backgroundColor = "green";
            myNumDiv.innerText = number;
            numInp.disabled = true;
            // Ən yüksək nəticə yenilənir
            if (highscore < score) {
                highscore = score;
                localStorage.setItem('highscore', highscore);
                highscoreDiv.innerText = `Ən Yüksək Nəticə - ${highscore}`;
            }
        } else if (guessNum > number) { // Təxmin yüksəkdirsə
            alertDiv.innerText = "Daha kiçik bir ədəd yoxlayın";
            score--;
            scoreDiv.innerText = `Nəticə - ${score}`;
        } else { // Təxmin aşağıdirsə
            alertDiv.innerText = "Daha böyük bir ədəd yoxlayın";
            score--;
            scoreDiv.innerText = `Nəticə - ${score}`;
        }
    } else { // Nəticə 0 olduqda
        alertDiv.innerText = "Oyun Bitdi";
        document.body.style.backgroundColor = "red";
        numInp.disabled = true;
    }
});

// Yenidən başlama düyməsinə basdıqda
restartButton.addEventListener('click', () => {
    // İnputu aktivləşdir, arxa fonu standartlaşdır və dəyişənləri yenilə
    numInp.disabled = false;
    document.body.style.backgroundColor = '';
    guessNum = 0;
    number = Math.round(Math.random() * 20);
    score = 10;
    myNumDiv.innerText = '?';
    scoreDiv.innerText = `Nəticə - ${score}`;
    alertDiv.innerText = '';
    numInp.value = '';
});
