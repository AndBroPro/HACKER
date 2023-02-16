class Robot extends LivingCreature{
    constructor(x,y,index) {
        super(x,y,index)
        this.x = x;
        this.y = y;
        this.energy = 50;
        this.index = index;
          }
    
    eat() {
        this.multiply++
        
       // console.log(this.energy)

        var grassCells = this.chooseCell(2);
        var newCell = random(grassCells);
        
        if(newCell){
          
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
              this.energy += 2 
             // console.log("eat = " + this.energy)
            for (var i in grassEatr) {
                if (newX == grassEatr[i].x && newY == grassEatr[i].y) {
                    grassEatr.splice(i, 1); 
                    break;
                } 
    
            }
            if(this.energy >= 30){
                this.mul()
              
            }
        }else{
            this.move()
        }
    }
    move(){
    // console.log(this.energy)
         
        let robotCells = this.chooseCell(random([0,1]))
        let newCell = random(robotCells)

        if(newCell && this.energy > 0){
           
            let NEWX = newCell[0]
            let NEWY = newCell[1]
            matrix[NEWY][NEWX] = 3
            matrix[this.y][this.x] = 0
            this.x = NEWX
            this.y = NEWY
             this.energy--
            // console.log("move = " + this.energy)
        }else{
            this.dead()
        }
        
    }
    dead(){
        if(this.energy <= 0){
            matrix[this.y][this.x] = 0
            for(let i in robotArr){
                if(this.x == robotArr[i].x && this.y == robotArr[i].y){
                    robotArr.splice(i, 1);
                    break;
                }
            }
        }

    }
   mul(){
       // console.log('saferwerwerwerwerweds')
           // this.multiply++;
                var emptyCells = this.chooseCell(random([0,1]));
                var newCell = random(emptyCells);
               // console.log(this.multiply)
                if(newCell && this.multiply >= 8){
                    
                    var newX = newCell[0];
                    var newY = newCell[1];
                    matrix[newY][newX] = 3;
        
                    var newRobot = new Robot(newX, newY, 3)
                    robotArr.push(newRobot);
                    this.multiply = 10;
                    this.energy = 0
                }
    }
}
