class GrassEaterGirl extends LivingCreature{
    eat() {
        this.multiply++
        
        var grassCells = this.chooseCell(1);
        var newCell = random(grassCells);
        
        if(newCell){
          
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX
            this.y = newY
              this.energy += 2 
             // console.log("eat = " + this.energy)
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1); 
                    break;
                } 
    
            }
            if(this.energy >= 35){
                this.mul()
            }
        }else{
            this.move()
        }
    }
    move(){
        
         
        let grassCells = this.chooseCell(random([0,1]))
        let newCell = random(grassCells)

        if(newCell && this.energy >= 0){
           
            let NEWX = newCell[0]
            let NEWY = newCell[1]
            matrix[NEWY][NEWX] = 4
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
            
            for(let i in grassEatr){
                
                if(this.x == grassEatrGirlsArr[i].x && this.y == grassEatrGirlsArr[i].y){
                
                    grassEatrGirlsArr.splice(i, 1);
                    break;
                }
            }
        }
    }
   mul(){
    
    
       // console.log('saferwerwerwerwerweds')
            //this.multiply++;
                var emptyCells = this.chooseCell(random([2,4]));
                var newCell = random(emptyCells);
               // console.log(this.multiply)

                if(newCell && this.multiply >= 8){
                    
                    var newX = newCell[0];
                    var newY = newCell[1];
                    // gender = random([2,4])
                    matrix[newY][newX] = random([2,4]);
                    var newGrassEater = new GrassEater(newX, newY,2)
                    grassEatr.push(newGrassEater);

                    // if(gender == 2){
                       
                    //     var newGrassEater = new GrassEater(newX, newY,2)
                    //     grassEatr.push(newGrassEater);
                    // }else if(gender == 4){
                    //     matrix[newY][newX] = gender;
                    //     var newGrassEaterGirl = new GrassEaterGirl(newX, newY,4)
                    //     grassEatrGirlsArr.push(newGrassEaterGirl);
                    // }
                    this.multiply = 0;
                }
                this.energy = 10
    }
    ReturnEnargy(){
        let WaterCell = this.chooseCell(6)
        let newWaterCell = random(WaterCell)
        if(newWaterCell){
            this.energy += 10
    }
  }
}