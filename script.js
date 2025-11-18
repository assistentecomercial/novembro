document.getElementById("startBtn").addEventListener("click", () => {
  document.getElementById("main").style.display = "none";
  document.getElementById("gifScreen").style.display = "flex";
  setTimeout(() => {
    window.location.href = "voucher.html";
  }, 7000);
});
