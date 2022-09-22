//* =====================================
//*  GUESS MY NUMBER
//*  Game Logic
//*======================================

//? 1-100 arasında rast gele bir sayı tut

const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

//? Variables

let score = 10;
let topScore = 0;

//* checkbtn basıldığında kontrolleri yap
document.querySelector(".check-btn").addEventListener("click", () => {
  const guessInput = Number(document.querySelector(".guess-input").value);
  const msg = document.querySelector(".msg");
  const body = document.querySelector("body");

  //? eğer input girilmeediyse kullanızıya uyarı
  if (!guessInput) {
    msg.innerText = "Please enter a number";
    //! eğer rastgele sayı == input.value
  } else if (randomNumber === guessInput) {
    //? tebrikler bildiniz
    msg.innerHTML = `Congrats! You win <i class="fa-solid fa-face-grin-hearts fa-2x"></i>`;
    //? background green
    body.className = "bg-success";
    if (score > topScore) {
      topScore = score;
      document.querySelector(".top-score").textContent = topScore;
    }
    document.querySelector(".secret-number").textContent = randomNumber;

    //! eğer rastgele != input value
  } else {
    if (score > 1) {
      score--;
      guessInput > randomNumber
        ? (msg.innerText = "DECREASE")
        : (msg.innerText = "INCREASE");
    }else {
        msg.innerText = "You lost"
    }

    document.querySelector(".score").textContent = score;
  }
});

//? eğer csore > topscore
//?   topscore = score
//? secret_number = görünür

//! değilse
// eğer score > 0
//!   score = score -1
//? rastgele < input.value
//?   azalt
//? değilse
//?   artır
//! değilse
//? üzgünüz kaybettiniz

//* againbtn basıldğınında
