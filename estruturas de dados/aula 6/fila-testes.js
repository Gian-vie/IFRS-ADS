const Queue = require('./fila-obj');


const fila = new Queue()

console.log(fila.isEmpty())
fila.enqueue(11)
fila.enqueue(21)
fila.enqueue(31)
fila.enqueue(41)
fila.enqueue(51)
console.log(fila)
fila.dequeue()
fila.dequeue()
fila.dequeue()
console.log(fila)
console.log(fila.toString())
console.log(fila.isEmpty())
console.log(fila.size())
// console.log(fila.nextElement())
