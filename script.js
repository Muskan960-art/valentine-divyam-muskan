const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y`y + "px"`;
});

noBtn.addEventListener("click", () => {
  alert("No option hi nahi hai 😏");
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align:center; margin-top:20%;">
      <h1 style="color:#ff4d6d;">YAYYYY 🥹❤️</h1>
      <h2>Divyam, you are officially Muskan’s Valentine 💖</h2>
    </div>
  `;
});