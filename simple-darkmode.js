function f_edarkmode() {
  document.body.classList.toggle("dark-mode");
  document.getElementById("ddarkmode").style.display = "block";
  document.getElementById("edarkmode").style.display = "none";

  localStorage.setItem("darkmode", "true");
}

function f_ddarkmode() {
  document.body.classList.toggle("dark-mode");
  document.getElementById("ddarkmode").style.display = "none";
  document.getElementById("edarkmode").style.display = "block";

  localStorage.setItem("darkmode", "false");
}

window.onload = function () {
  var darkmode = localStorage.getItem("darkmode");

  if (darkmode == "true") {
    f_edarkmode();
  }
  typeEffect();
};

function typeEffect() {
  const text = "Edster Manuel M. Mose.";
  const typingTextElement = document.getElementById("typing-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingTextElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100);
    }
  }

  type();
}
