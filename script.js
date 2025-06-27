// Create floating hearts
for (let i = 0; i < 30; i++) {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${5 + Math.random() * 5}s`;
    heart.style.opacity = Math.random();
    document.body.appendChild(heart);
}

// Surprise popup
function showSurprise() {
    alert("🎉 Surprise! I love you more with each passing day. Let's make this birthday unforgettable! 💖");
}
