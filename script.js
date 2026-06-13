const surprises = [
["Step 1 ❤️","You unlocked Talha's heart. It was reserved exclusively for Naba."],
["Step 2 😂","Relationship detector confirms: Naba is dangerously cute."],
["Step 3 📸","Memory storage found. Every folder somehow contains you."],
["Step 4 🚨","Emergency alert: Boyfriend missing Naba levels are critical."],
["Step 5 💘","Love calculator result: 1000000%. Scientists are confused."],
["Step 6 🎁","Treasure chest opened. Treasure discovered: Naba."],
["Step 7 🤗","Virtual hug delivered successfully. No loading required."],
["Step 8 🌙","The moon says Talha talks about Naba too much."],
["Step 9 ⭐","A secret star grants one unlimited smile coupon."],
["Step 10 🌹","If every rose represented a thought of you, the planet would be covered."],
["Step 11 💌","Dear Naba, thank you for making ordinary days feel special."],
["Final Surprise 👑","You are officially crowned Queen Naba of Talha's Universe. I love you 💜"]
];

let i = -1;

const title = document.getElementById("title");
const text = document.getElementById("text");
const btn = document.getElementById("action");

btn.onclick = () => {
    i++;

    if (i < surprises.length) {
        title.textContent = surprises[i][0];
        text.textContent = surprises[i][1];

        btn.textContent =
            i === surprises.length - 1
                ? "Finish 💜"
                : "Next Surprise ✨";
    } else {
        title.textContent = "The End 💜";
        text.textContent =
            "Thank you for completing the adventure, Naba.";
        btn.style.display = "none";
    }
};

const particles = document.querySelector(".particles");

for (let j = 0; j < 60; j++) {
    const s = document.createElement("span");

    s.innerHTML = Math.random() > 0.5 ? "❤" : "✨";
    s.style.left = Math.random() * 100 + "vw";
    s.style.fontSize = (10 + Math.random() * 20) + "px";
    s.style.animationDuration = (6 + Math.random() * 8) + "s";
    s.style.animationDelay = Math.random() * 5 + "s";

    particles.appendChild(s);
}
