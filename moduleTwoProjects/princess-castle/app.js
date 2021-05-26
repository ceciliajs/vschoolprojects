
class Player {
    constructor(name, totalCoins = 0, status = "powered up", hasStar = false){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
       
  }

  
  printStatus(){
      return `Name: ${this.name} 
Status: ${this.status} 
Total Coins: ${this.totalCoins}`
    }
    
    setName(namePicked){
        this.name = namePicked
        
    }
    
    gotHit(){
        console.log("You got hit!!")
        if(this.status === "small"){
            this.status = "dead"
            
        } else if(this.status === "powered up") {
            this.status = "big"
        } else if (this.status === "big"){
            this.status = "small"
        } 
        
        return this.status
        }
    
    
    getPowerUp(){
        console.log("Powering up!!")
        if (this.status === "big"){
            this.status = "powered up"
            console.log("you now have a star")
        } else if (this.status === "small"){
            this.status === 'big'
            
        } else if (this.status = "powered up"){
            this.hasStar = true
            console.log("you now have a star")
        }
        return this.status
    }
    
    addCoin(){
        this.totalCoins++
        return this.totalCoins
        
    }
    
    
}

const luigi = new Player("Luigi")
const mario = new Player("Mario")
mario.setName("Mario")

var set = setInterval(()=>{
    const randomNum = Math.floor(Math.random() * 3)
    if(randomNum === 0){
        mario.gotHit()
            if( mario.status === "dead"){
                console.log(`Final Status************`)
                clearInterval(set)
            }
        
           
    } else if (randomNum === 1){
        mario.getPowerUp()
    } else if (randomNum === 2){
        mario.addCoin()
    } 
    console.log(mario.printStatus())
    
}, 1000)

