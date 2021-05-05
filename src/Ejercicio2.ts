export class Kata {
  static highAndLow(numbers: string) {
     

    let num:string = numbers
     let numsplit:number[] = num.split(' ').map(Number)
     return Math.max.apply(0,numsplit)+ ' ' + Math.min.apply(0,numsplit) 
  }
}
console.log(Kata.highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"))