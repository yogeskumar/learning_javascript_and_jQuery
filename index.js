var a = 5;
var a = 6;

let x = 1;
x = 2;

const y = 3;

console.log(a, x, y)

{
    var e = 12;
    console.log(e)
}

console.log(marks)
var marks = 35
console.log(marks)

// "use strict"
var let = 10
console.log(let)

console.log(31 / 2)
console.log(Math.floor(31 / 2))
console.log(Math.ceil(31 / 2))

console.log(3 ** 3)


console.log(3 == 3)
console.log(3 != 3)
console.log(3 !== "3")
console.log(3 === '3')

console.log("Logical")
console.log(true && false)
console.log(true && true)
console.log(!0)

console.log(true ? x = 5 : x = 2)
q = true ? 4 : 3
console.log(q)

// post increament
var a = 5
var b = a++
console.log(a, b)

// pre increament
var a = 5
var b = ++a
console.log(a, b)

// bitwise operators
// values first gets converted to their
// bit form then the operation gets applied to them
console.log(8 & 9)
console.log(8 | 9)
console.log(8 ^ 9)
console.log(~9)

if (5 > 4) {
    console.log("5 is gater than 4")
}
else if (5 < 4) {
    console.log("Aisa nhi ho skta")
}
else {
    console.log("Lekin ye to ho gya, ab kya kre")
}

let num = 2;

switch (num){//strict equality applies here
    case 1: {
        console.log("This is 1")
        console.log("This is 1")
        console.log("This is 1")
    }
    // case 2: {
    //     console.log("This is 2")
    //     console.log("This is 2")
    //     console.log("This is 2")
    // }
        case 3: {
        console.log("This is 3")
        console.log("This is 3")
        console.log("This is 3")
        break
    }
        case 4: {
        console.log("This is 4")
        console.log("This is 4")
        console.log("This is 4")
    }
        case 5: {
        console.log("This is 5")
        console.log("This is 5")
        console.log("This is 5")
    }
        default: {
        console.log("This is default, it works if nothing works")
        console.log("This is default")
        console.log("This is default")
        }
}

let myFun = function (a, b) {
    console.log(a, b)
}

//callback function
let myFun1 = ((a, b)=>{
    console.log(a,b)
})

myFun(5, 6)
myFun1(5, 6)

//arrays
let arr1 = new Array(1, 2, 3, 4, "5", '6')
console.log(arr1)
let arr2 = Array(1, 2, 3)
console.log(arr2)
let arr3 = [1, 2, 3, 4, "1", '2']
console.log(arr3)
console.log("1" === '1')
console.log(arr1.length)
arr1.length = 10
console.log(arr1.length)
console.log(arr1)

arr4 = []
console.log(arr4.length)

var arr5 = Array(52)
console.log(arr5.length)
console.log(arr5)
arr5[4] = 5
console.log(arr5)

// for loop and iterating over arrays
for (let i = 0; i < arr3.length; i++){
    console.log(arr3[i])
}

arr3.forEach((item)=>{
    console.log(item)
})

arr3.forEach(function(item){
    console.log(item)
})

// another_array = arr3.forEach((item) => {
//     return item*2
// })

another_array = arr3.map((item) => {
    return item*2
})

console.log(another_array)

// array methods
var myArr = [1, 2, 3]
let newArr = [3, 4, 5]
let newarr = newArr.concat(myArr)
console.log(newArr)
console.log(newarr)

let ma = ["This", "is", "it"]
ma = ma.join(" ")//delimiter
console.log(ma)

//stack
arr3.push(7)
console.log(arr3)

arr3.pop()
console.log(arr3)

//queue
arr3.unshift(7, 9)
console.log(arr3)

arr3.shift(7)
console.log(arr3)

var myArr = [1, 2, 3, 4]
myArr.slice(1, 3)
console.log(myArr)
console.log(myArr.slice(1, 3))//1, 3-1=2

myArr.splice(1, 3, 'a', 'b', 'c')//1st 2 places used for indexces only
console.log(myArr)

var myArr = [1, 2, 3, 4]
myArr.reverse()
console.log(myArr)
myArr.sort()
console.log(myArr)
console.log(myArr.indexOf(3))
myArr[5] = 1
console.log(myArr)
console.log(myArr.lastIndexOf(1))

//array methods part3 filter, some, every
var myArr = [22, 23, 24, 25, 26]
var newArr1 = myArr.filter((item) => {
    return (item%2==0)
})
console.log(newArr1)
var newArr1 = myArr.map((item) => {
    return (item%2==0)
})
console.log(newArr1)
console.log(myArr)

var areSomeOddItemsAvailable = myArr.some(item =>{
    return (item%2==0)
})
console.log(areSomeOddItemsAvailable)
var isEveryItemEven = myArr.every(item => {
    return (item%2==0)
})
console.log(isEveryItemEven)

//map like dict in python
var myMap = new Map([[1, 1], [2, 2], [3, 3], [4, 4]])
console.log(myMap)

console.log(myMap.has(1))
console.log(myMap.has(9))

// iterating over keys in js
for (var i of myMap) {
    console.log(i)
}

for (var [i, j] of myMap) {
    console.log(i, j)
}

for (var key of myMap.keys()) {
    console.log(key)
}

for (var value of myMap.values()) {
    console.log(value)
}

myMap.forEach((i, j) => {
    console.log(i, j)
})

for (let oneEntry of myMap.entries()) {
    console.log(oneEntry)
}

for (let oneEntry of myMap.entries()) {
    console.log(oneEntry[0], oneEntry[1])
}

for (let [i, j] of myMap.entries()) {
    console.log(i, j)
}

myMap.delete(1)

for (let oneEntry of myMap.entries()) {
    console.log(oneEntry)
}

myMap.clear()

for (let oneEntry of myMap.entries()) {
    console.log(oneEntry)
}

//set- all items are unique, key==value
var mySet = new Set(myArr)
console.log(mySet)
mySet.add(1)
console.log(mySet)
mySet.add(2)
console.log(mySet)
mySet.add(1)
console.log(mySet.has(1))
mySet.add(1)
console.log(mySet)
mySet.add(1)
console.log(mySet)
console.log(mySet.size)

//iteratig over values in set
mySet.forEach((value, key) => {
    console.log(value, key)
})

//array to set
var myS1 = new Set(myArr)
// set to array
var newa = Array.from(myS1)

console.log(myS1, newa)

//DOM
console.log(document.firstChild)
console.log(document.firstElementChild)
console.log(document.firstElementChild.firstChild)
console.log(document.firstElementChild.firstElementChild)

console.log(document.getElementsByTagName("li"))
var myLi = document.getElementsByTagName("li")
console.log(myLi)
for (let item of myLi) {
    console.log(item)
}

var myH = document.getElementsByTagName("h1")
console.log(myH)
myH[0].style.color = "red"
myH[0].style.backgroundColor = "lightgreen"

var myLi = document.getElementsByClassName("ul1")
console.log(myLi)
console.log(myLi[0])

// var myliItem = document.getElementById("li1")
// console.log(myliItem.textContent)

//query selector
var hqs = document.querySelector(".mh1")
console.log(hqs)
console.log(hqs.classList)
console.log(hqs.textContent)

var hqs = document.querySelectorAll(".mh1")
console.log(hqs)
console.log(hqs[0].classList)
console.log(hqs[0].textContent)

var ul1 = document.querySelectorAll(".ul1")
console.log(ul1[0])

var ul1 = document.querySelector(".ul1")
console.log(ul1)
console.log(ul1.classList)

var li1 = document.querySelector(".li1")
console.log(li1)
console.log(li1.classList)

var li1 = document.querySelectorAll(".li1")
console.log(li1)
console.log(li1[1])

var ul1 = document.querySelectorAll(".ul1 .li1")
console.log(ul1)
// console.log(ul1.classList)

var ul1 = document.querySelectorAll(".ul1 #li2")
console.log(ul1)

var for_para = document.querySelector("p#p1")
console.log(for_para)

var liitem1 = document.querySelector(".li1")
liitem1.style.display = "inline-block"
liitem1.style.color = "white"
liitem1.style.backgroundColor = "green"

var li1 = document.querySelectorAll(".li1")
console.log(li1)

li1.forEach(item => {
    item.style.display = "inline"
    item.style.color = "white"
    item.style.backgroundColor = "green"
    item.style.fontSize = "25px"
    item.style.visibility = "visible"
})

var myButtons = document.querySelector(".myButtons")
console.log(myButtons.classList)
myButtons.classList.add("myButton")

console.log(document.querySelectorAll(".myButtons"))
console.log(document.querySelectorAll(".myButtons")[0].classList)

document.querySelectorAll(".myButtons")[1].classList.add("myButton")

console.log(document.querySelectorAll(".myButtons")[1].classList)

document.querySelectorAll(".myButtons")[0].classList.remove("myButton")

console.log(document.querySelectorAll(".myButtons")[0].classList)

document.querySelectorAll(".myButtons")[0].classList.toggle("myButton")

console.log(document.querySelectorAll(".myButtons")[0].classList)

// manipulating texts and attributes
console.log(document.querySelectorAll(".myButtons")[1].getAttribute("class"))

var b = document.querySelector(".myButtons")
b.setAttribute("id", "buttonid")

console.log(document.querySelector(".myButtons").getAttribute("id"))

//changing text/content/html
console.log(document.querySelector("a").innerHTML)

var atag = document.querySelector("a")
atag.innerHTML = "<em>copyassignment</em>"

//innertext to get text like as it is going to be rendered on web page
console.log(document.querySelector("a").innerText)
atag.innerText = "copyassignment.com"

console.log(document.querySelector("a").textContent)
atag.textContent = "copyassignment.com1"

// event handling using querySelector
var mh2 = document.querySelector(".mh2")
mh2.addEventListener("mouseover", () => {
    console.log("mouse over h2")
})

mh2.addEventListener("mouseover", () => {
    mh2.classList.add("designH2")
})

mh2.addEventListener("mouseleave", () => {
    mh2.classList.remove("designH2")
})

function forH2() {
    console.log("Another method for adding functionality")
}

mh2.addEventListener("mouseleave", forH2)

var myButton = document.querySelector(".myButtons")

myButton.addEventListener("click", () => {
    myButton.classList.toggle("myButton")
})

var keyPressed = document.addEventListener("keydown", (event) => {
    console.log(event.key)
})

// jQuery- do more write less
console.log($(".ul1").text())
$("p#p1").addClass("primaryButton")

//get text
console.log($(".mh1").text())
// set text
$(".mh1").text("H1")
console.log($(".mh1").text())

// set color
$(".mh1").css("background-color", "yellow")
// get color
console.log($(".mh1").css("background-color"))

// apply many properties at a time
$(".mh1").css({ "background-color": "red", "font-size": "40px", "color": "white" })
// $(".mh1").value = "Some value"

$("input#onlyInput").addClass("forInput")

// get attribute values
console.log($("input#onlyInput").attr("type"))
// set attribute values
$("input#onlyInput").attr("placeholder", "This is placeholder from jQuery")

// before, after, append, prepend
// $(".mh1").before("<button>this is before property</button>")
// $(".mh1").after("<button>this is after property</button>")
$(".mh1").prepend("<button>this is prepend property</button>")
$(".mh1").append("<button>this is append property</button>")

// event handling in jQuery
$(".mh1").mouseenter(() => {
    $("input#onlyInput").attr("placeholder", "mouse entered over H1")
})
$(".mh1").mouseleave(() => {
    $("input#onlyInput").attr("placeholder", "mouse leave H1")
})

$("button").click(() => {
    $("input#onlyInput").attr("placeholder", "button clicked")
})

// another way
$(".mh1").on("mouseenter", () => {
    $("input#onlyInput").attr("placeholder", "mouse entered over H1")
})
$(".mh1").on("mouseleave", () => {
    $("input#onlyInput").attr("placeholder", "mouse leave H1")
})

$("button").on("click", () => {
    $("input#onlyInput").attr("placeholder", "button clicked")
})

// objects in javascript

var person = {
    name: "Yogesh Kumar",
    rollNo: 18662,
    city: "Agra",
    hobbies: ["listening music", "walking", "thinking"],
    aboutMe: function () {
        $("#onlyInput").attr("placeholder", "My name is " + this.name + " and RollNo is " + this.rollNo)
    }
}

person.aboutMe()

console.log(person.name)
console.log(person.rollNo)
console.log(person.city)
console.log(person.hobbies)

// other way of accessing
console.log(person["name"])
console.log(person["rollNo"])
console.log(person["city"])
console.log(person["hobbies"])
console.log(person["aboutMe"])

var abc = "hobbies"
console.log(person[abc])// more flexible
console.log(person.abc)// undefined

// first class function
var writeHello = function () {
    $("#onlyInput").attr("placeholder", "write inside input value")
}

writeHello()

var sayHello = function () {
    return "Hello"
}

$("#onlyInput").attr("placeholder", sayHello())

function myFun11() {
    $("#onlyInput").attr("placeholder", "inside myFun function")
}

myFun11()

function funAsArgs(sayHello) {
    $("#onlyInput").attr("placeholder", "from sayHello fun " + sayHello())
}

funAsArgs(sayHello)