var scores = [0, 0];
var activePlayer = 0;
var roundScore = 0;
var diceNumber = Math.floor(Math.random() * 6 + 1);

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// Шоог шидэх эвэнт листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 хүртэл тоог санамсаргүйгээр гаргах
  var diceNumber = Math.floor(Math.random() * 6 + 1);

  // шооны зургийг вэб дээр гаргаж ирнэ.
  diceDom.style.display = "block";

  // Буусан санамсаргүй тоонд харгалзах зургийг вэб дээр гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";

  // буусан тоо нь 1-ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүлнэ.

  if (diceNumber !== 1) {
    // 1-ээс ялгаатай тоо буулаа.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // Хэрэв идэвхтэй тоглогч нь 0 байвал идэвхтэй тоглогчийг 1 болго.
    switchToNextPlayer();
  }
});

// hold товчны эвэнт
document.querySelector(".btn-hold").addEventListener("click", function () {
  scores[activePlayer] = scores[activePlayer] + roundScore;

  document.getElementById("score-" + activePlayer).textContent =
    scores[activePlayer];
  // Уг тоглогчийг хожсон эсэхийг шалгах Оноо 100-аас их
  if (scores[activePlayer] >= 20) {
    // ялагч
    document.getElementById("name-" + activePlayer).textContent = "ЯЛАГЧ!!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    switchToNextPlayer();
  }
});

// дараагийн тоглогчруу шилжүүлнэ.
function switchToNextPlayer() {
  // ээлжийн оноог 0 болгоно
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = roundScore;

  // Үгүй бол идэвхтэй тоглогчийг 0 болго.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // улаан цэгийг хайж олж солино.
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // diceDom.style.display = "none";
}
