    const display = document.getElementById("display");

    function appendValue(val) {
      display.value += val;
    }

    function clearDisplay() {
      display.value = "";
    }

    function backspace() {
      display.value = display.value.slice(0, -1);
    }

    function calculate() {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    }

    // Keyboard input support
    document.addEventListener("keydown", (e) => {
      if ((e.key >= '0' && e.key <= '9') || ["+","-","*","/","."].includes(e.key)) {
        appendValue(e.key);
      } else if (e.key === "Enter" || e.key === "=") {
        e.preventDefault();
        calculate();
      } else if (e.key === "Backspace") {
        backspace();
      } else if (e.key === "Escape"){
        clearDisplay();
      }
   } );