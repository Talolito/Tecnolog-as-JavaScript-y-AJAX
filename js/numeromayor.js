function findLargestNumber() {
    const numbersInput = document.getElementById('numbers').value;
    const numbersArray = numbersInput.split(',').map(num => parseInt(num.trim(), 10));
  
    if (numbersArray.some(isNaN)) {
      document.getElementById('result').innerText = 'Ingresa una lista válida de números.';
    } else {
      const largestNumber = Math.max(...numbersArray);
      document.getElementById('result').innerText = `El número más grande es: ${largestNumber}`;
    }
  }