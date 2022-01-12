// Easy level
const readline = require("readline-sync")
//1- Program to add 5 numbers

const addNum = (n1, n2, n3, n4, n5) => n1 + n2 + n3 + n4 + n5

console.log(addNum(3, 5, 7, 9, 1))

//2- Number is even or odd

const evenOdd = () => {
    let num1 = Number(readline.question("Enter any number "));
    return num1 % 2 === 0 ? "even" : "odd"
}

console.log(evenOdd())

//3- Find maxi and min

const findMax = () => {
    let num1 = Number(readline.question("Enter one number "))
    let num2 = Number(readline.question("Enter other number "))
    if (num1 >= num2) return [num1, num2]
    else return [num2, num1]
}

const [num1, num2] = findMax()

console.log(`The maximum one is ${num1} and minimum one is ${num2}`)

//4- Find maximum out of three

const findMaximum = () => {
    let arr = [], max;
    let a = Number(readline.question("Enter the count of number you want to save "))
    for (let i = 0; i < a; i++) {
        arr.push(Number(readline.question()))
    }
    max = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) max = arr[i]
    }
    return max;
}

console.log(`Maximum number is ${findMaximum()}`)

//5- Find minimum of the three

const findMinimum = () => {
    let arr = []
    let a = Number(readline.question("Enter the count of number "))
    for (let i = 0; i < a; i++) {
        arr.push(Number(readline.question()))
    }
    let min = arr[0]
    for (let i = 1; i < arr.length; i++) {
        if (min > arr[i]) min = arr[i]
    }
    return min;
}

console.log(`Minimum number is ${findMinimum()}`)

//6- Number days in a month

const findDays = () => {
    let Months = {
        January: 31,
        Febuary: 28,
        March: 31,
        April: 30,
        May: 31,
        June: 30,
        July: 31,
        August: 31,
        September: 30,
        October: 31,
        November: 30,
        December: 31
    }
    let monthName = readline.question("Enter any month ")
    return Months[monthName]
}

console.log(`Days are ${findDays()}`)

// ============================================================================================================================

//Intermediate Level

//1-

//2- Print the star pattern

const starPattern = () => {
    let i, j;
    let string = "";
    for (i = 0; i <= 5; i++) {
        for (j = 0; j <= i; j++) {
            string += "*" //store pattern in every single
        }
        string += "\n"  //use to change the line
    }
    console.log(string) //print in the console
}

starPattern()

//3- Take input any number and print it table

const printTable = () => {
    let num = Number(readline.question("Enter any number "))
    let str = ""
    for (let i = 1; i <= 10; i++) {
        str = `${str} ${num * i}`
    }
    for (let i = 0; i < 12; i++) {
        console.log(str)
    }
}

printTable()

//4-

// 5- Takes input from the usar any write it's factorial

const findFactorial = () => {
    let num = Number(readline.question("Enter the number "))
    let fact = 1
    for (let i = num; i > 0; i--) {
        fact = fact * i
    }
    console.log(fact)
}

findFactorial()

//6-

//7- Funtion takes day as input and return it is weekdays or weekends

const weekdayOrWeekend = () => {
    let day = readline.question("Enter any day ")
    const Days = {
        Monday: "Weekday", Tuesday: "Weekday", Wednesday: "Weekday", Thursday: "Weekday", Friday: "Weekday", Saturday: "Weekend", Sunday: "Weekend"
    }
    console.log(Days[day])
}

weekdayOrWeekend()