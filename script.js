let amount = +prompt('Введите кол-во символов')
let otstup = prompt('Введите отступ символа')
let last = prompt('Введите последний символ')

for(let i = 0; i < amount; i++){
    last = i == 0 ? last : last = otstup + last 
    console.log(last);
}