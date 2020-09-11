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
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    // Үгүй бол идэвхтэй тоглогчийг 0 болго.

    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // улаан цэгийг хайж олно.
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    // diceDom.style.display = "none";
  }
});
