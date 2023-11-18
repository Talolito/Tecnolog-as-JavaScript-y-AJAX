function printVowels() {
    const inputText = document.getElementById('inputText').value;
    const vowels = inputText.match(/[aeiouAEIOU]/g);
    const vowelsString = vowels ? vowels.join(', ') : 'No se encontraron vocales';
    document.getElementById('result').innerText = `Vocales: ${vowelsString}`;
  }