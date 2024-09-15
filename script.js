function addToDisplay(value) {
    const display = document.getElementById('result');
    display.value += value;
  }
  function clearDisplay() {
    document.getElementById('result').value = '';
  }
  function calculate() {
    const display = document.getElementById('result');
    try {
      display.value = math.evaluate(display.value); 
    } catch (error) {
      alert('Invalid expression');
    }
  }
  document.addEventListener('keydown', function (event) {
    const display = document.getElementById('result');
    const key = event.key;
    if (!/[0-9+\-*/%]/.test(key)) {
      alert('Only numbers and operators are allowed');
      event.preventDefault(); 
      return;
    }
    display.value += key;
  });