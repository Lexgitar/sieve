 module.exports = class Field {
    constructor(field){
      this._field = field
      this.first = this._field.findIndex(elem=> elem.includes('*'))
  this.second = this._field[this.first].indexOf('*')
      this._location = [this.first, this.second]
      this._gameOver = false;
      
    }
    check(){
        return this._gameOver
    }
     game(){
      console.log( this._field.map(item=>item.join('')).join('\n'))
      //console.log(this._field[0].length)
    }

   alerta(opt){
        switch(opt){
            case 'out': console.log("Out of bounds - Game Over")
                        this._gameOver = true
            break;
            case 'fell': 
                        this._gameOver = true
                        this.game()
                        console.log('You fell through hole - Game Over')
            break;
            case 'won': 
                        this._gameOver = true
                        this.game()
                        console.log('You won, You found the hat')
            break;
        }
   }

    play(input){
        
       
        switch(input){

            case 'd':if (this._location[0]+1 > this._field.length-1 ){
                return this.alerta('out')
            }else if(this._field[this._location[0]+1][this._location[1]] == '^'){
                            this._field[this._location[0]][this._location[1]+1] = '@'
                            return this.alerta('won')
                    }else if(this._field[this._location[0]+1][this._location[1]] == 'O' ){
                        this._field[this._location[0]][this._location[1]+1] = 'X'
                            return this.alerta('fell')
                    }else if (this._field[this._location[0]+1][this._location[1]] == '░' || 
                    this._field[this._location[0]+1][this._location[1]] == '*'  ){
                    this._field[this._location[0]+1][this._location[1]] = '*'
                    this._location[0]+=1
                }

                break;
            case 'u':if (this._location[0]-1 < 0 ){
                        return this.alerta('out')
                    }else if(this._field[this._location[0]-1][this._location[1]] == '^'){
                        this._field[this._location[0]-1][this._location[1]] = '@'
                                    return this.alerta('won')
                    }else if(this._field[this._location[0]-1][this._location[1]] == 'O' ){
                        this._field[this._location[0]-1][this._location[1]] = 'X'
                                    return this.alerta('fell')
                    }else if (this._field[this._location[0]-1][this._location[1]] == '░' || 
                            this._field[this._location[0]-1][this._location[1]] == '*'  ){
                            this._field[this._location[0]-1][this._location[1]] = '*'
                            this._location[0]-=1
                        }
                break;
            case 'r':if (this._location[1]+1 > this._field[0].length-1){
                            return this.alerta('out')
                    }else if(this._field[this._location[0]][this._location[1]+1] == '^'){
                            this._field[this._location[0]][this._location[1]+1] = '@'
                            return this.alerta('won')
                    }else if(this._field[this._location[0]][this._location[1]+1] == 'O' ){
                            this._field[this._location[0]][this._location[1]+1] = 'X'
                            return this.alerta('fell')
                    }else if (this._field[this._location[0]][this._location[1]+1] == '░' || 
                    this._field[this._location[0]][this._location[1]+1] == '*'  ){
                    this._field[this._location[0]][this._location[1]+1] = '*'
                    this._location[1]+=1
    }
                break;
            case 'l':if (this._location[1]-1 < 0){
                                return this.alerta('out')
                        }else if(this._field[this._location[0]][this._location[1]-1] == '^'){
                            this._field[this._location[0]][this._location[1]-1] = '@'
                                return this.alerta('won')
                        }else if(this._field[this._location[0]][this._location[1]-1] == 'O' ){
                            this._field[this._location[0]][this._location[1]-1] = 'X'
                                return this.alerta('fell')
                        }else if (this._field[this._location[0]][this._location[1]-1] == '░' || 
                        this._field[this._location[0]+1][this._location[1]-1] == '*'  ){
                        this._field[this._location[0]+1][this._location[1]-1] = '*'
                        this._location[1]-=1
                    }
                break;
            default :
                console.log ('Use R-L-D-U')
        }
    }
   
    print(){ 
     console.log( this._field.map(item=>item.join('')).join('\n'))
     
    }
  
    
  }

 