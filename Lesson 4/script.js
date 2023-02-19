var p = document.querySelectorAll('p')
// console.log(p)
var MyClass = document.querySelectorAll('.MyClass')
// console.log(MyClass)
var id = document.querySelectorAll('#OnlyP')
// console.log(id)
var button = document.querySelector('#MyButton')
button.addEventListener('click',(e)=>{
    alert("Hello")
    console.log(e.clientX,e.clientY)
})

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
  }
  function mousePressed(){
      console.log(mouseX,mouseY)
  }