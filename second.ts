// 매개변수에서 쓰이는 void는 실제 리턴값이 무엇이든지 상관이 없다.
declare function forEach(arr: number[], callback: (el: number) => void):void

let target:number[] = [];
forEach([1,2,3,], el => {target.push(el)})
forEach([1,2,3,], el => target.push(el))