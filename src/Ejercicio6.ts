function solution(value){

    return "Value is " + ("00000" + value).slice(-5);
  }
  
  console.log(solution(5))

  /* Si fin es omitido, slice extrae hasta el final de la secuencia (arr.length).
Si fin es mayor a la longitud del array, slice extrae hasta el final de la secuencia (arr.length). */