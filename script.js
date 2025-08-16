const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");
const operators = ['+', '-', '*', '/', '%'];

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;
    let current = screen.textContent;
    let lastChar = current.slice(-1);

    if (value === "AC") {
      screen.textContent = "";
    } else if (value === "DEL") {
      screen.textContent = current.slice(0, -1);
    } else if (value === "=") {
      try {
        screen.textContent = eval(current);
      } catch {
        screen.textContent = "Error";
      }
    } else if (operators.includes(value)) {
      if (current === "") return; // Don't allow starting with operator
      if (operators.includes(lastChar)) {
        screen.textContent = current.slice(0, -1) + value; // Replace last operator
      } else {
        screen.textContent += value;
      }
    } else {
      screen.textContent += value;
    }
  });
});
