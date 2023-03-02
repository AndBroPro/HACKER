let matrix = [];
let grassArr = []
let grassEatr = []
let robotArr = []
let grassEatrGirlsArr =[]
let creatorRobotArr = []
let waterArr = []
let virusArr = []

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
            if(i == 35 && j == 35){
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
}
let VIRUS = 0

function draw() {
    frameRate(fast);
    
    // var timer = setInterval(function() {
    //     if (t >= 0) {
    //         let secs = Math.floor((t % (1000 * 60)) / 1000);
    //     }
    // }, 1000);
     
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if(VIRUS == 1){
                if(i == 40 && j == 1){
                    matrix[i][j] = 7
                }
            }
            if(matrix[i][j] === 7){
                let vir = new Virus(j, i, 7);
                virusArr.push(vir)
            }
        }
    }
  
    // console.log(VIRUS)
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
   }
   for(var i in robotArr){
    robotArr[i].eat();
  }
//   for(var i in grassEatrGirlsArr){
//     grassEatrGirlsArr[i].eat();
//     grassEatrGirlsArr[i].ReturnEnargy();
//   }
  for(var i in creatorRobotArr){
    if(frameCount % 15 == 0){
        creatorRobotArr[i].mul();
    }
  }
  for(var i in virusArr){
    virusArr[i].eat()
  }
}