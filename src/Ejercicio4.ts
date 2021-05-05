//Ejercicio en Javascript

function disemvowel(str) {

  return str.match(/[^a|e|i|o|u]/gi).join('') === null ? " " : str.match(/[^a|e|i|o|u]/gi).join('')
}

console.log(disemvowel("This website is for losers LOL!")) 