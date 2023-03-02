let matrix = [];
let grassArr = []
let grassEatr = []
let robotArr = []
let creatorRobotArr = []
let waterArr = []
let bombArr = []

let colorGrass = "green"
let fast = 60

var colorGrassEater = "yellow"
var colorRobot = "red"
var colorCraterRobot = "#D32600"

var side = 40;
function setup() {
    for(let i = 0; i < 40; i++){
        matrix[i] = []
        for(let j = 0; j < 40; j++){
            matrix[i][j] = random([0, 1])
            if(i == 39 && j == 39){
                matrix[i][j] = 2
            }
            if(i == 29 && j == 29){
                matrix[i][j] = 2
            }
            if(i == 2 && j == 2){
                matrix[i][j] = 3
            }
            if(i == 1 && j == 1){
                matrix[i][j] = 5
            }
            if(i == 20 && j == 20){
                matrix[i][j] = 6
            }
            
        }
    }
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 1) {
                let gr = new Grass(j, i, 1);
                grassArr.push(gr); 
            } else if (matrix[i][j] === 2) {
                let grEa = new GrassEater(j, i, 2);
                grassEatr.push(grEa); 
            }
            else if (matrix[i][j] === 3) {
                let rob = new Robot(j, i, 3);
                robotArr.push(rob); 
            }
            else if (matrix[i][j] === 5) {
                let CrRob = new CreatorRobot(j, i, 5);
                creatorRobotArr.push(CrRob); 
            }
            else if (matrix[i][j] === 6) {
                let Wat = new Water(j, i, 6);
                waterArr.push(Wat); 
            }
            
        }
    }
    // for(var i in grassEatr){
    //     for(var h = 1000; h <= 30000; h + 1000)
    //     setTimeout( grassEatr[i].mul(),1000)
    //     break
    // }
    // setTimeout(()=>{
    //     console.log("axper jan")
    // }, )
   
}

let BOMB = 0
function draw() {
    frameRate(fast);
    console.log(frameRate)
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill(colorGrass);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill(colorGrassEater);
            }
            else if (matrix[y][x] == 3) {
                fill(colorRobot);
            }
            else if (matrix[y][x] == 5) {
                fill(colorCraterRobot);
            }
            else if (matrix[y][x] == 6) {
                fill("#04B6FE");
            }
            rect(x * side, y * side, side, side);
        }
    }
   for(var i in grassArr){
      grassArr[i].mul();
    }
    for(var i in grassEatr){
     grassEatr[i].eat();
     grassEatr[i].ReturnEnargy()
     if(frameRate <= 550){
        grassEatr[i].mul();
     }
    //  console.log(frameCount)
    
   }
   for(var i in robotArr){
    robotArr[i].eat();
  }
  for(var i in creatorRobotArr){
    if(frameCount % 15 == 0){
        creatorRobotArr[i].mul();
    }
  }
}