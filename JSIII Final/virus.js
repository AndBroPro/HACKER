class Virus extends LivingCreature{
    constructor(x,y,index) {
        super(x,y,index)
        this.x = x;
        this.y = y;
        this.energy = 20;
        this.index = index;
          }
    eat() {
        this.multiply++
        
       // console.log(this.energy)

        var grassCells = this.chooseCell(3);
        var newCell = random(grassCells);
        
        if(newCell){
          
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 7;
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
              this.energy -= 2 
             // console.log("eat = " + this.energy)
            for (var i in robotArr) {
                if (newX == robotArr[i].x && newY == robotArr[i].y) {
                    robotArr.splice(i, 1); 
                    break;
                } 
    
            }
        }else{
                this.move()
            }
    }
    move(){
    // console.log(this.energy)
         
        let VirCells = this.chooseCell(random([0,1]))
        let newCell = random(VirCells)

        if(newCell && this.energy > 0){
           
            let NEWX = newCell[0]
            let NEWY = newCell[1]
            matrix[NEWY][NEWX] = 7
            matrix[this.y][this.x] = 0
            this.x = NEWX
            this.y = NEWY
            // console.log("move = " + this.energy)
        }else{
            this.dead()
        }
        
    }
    dead(){
        if(this.energy <= 0){
            matrix[this.y][this.x] = 0
            for(let i in virusArr){
                if(this.x == virusArr[i].x && this.y == virusArr[i].y){
                    robotArr.splice(i, 1);
                    break;
                }
            }
        }

    }
 

}