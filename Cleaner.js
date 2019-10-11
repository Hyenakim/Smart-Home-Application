const SmartAppliance = require('./SmartAppliance');
var power = 0
var input = 0
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
})
class position {
    constructor(y,x){
    this.y = y;
    this.x = x;
    }
}
var now = new position(0,0)
class Cleaner extends SmartAppliance{
    constructor(){
        super()
        const main = async () => {
            await setPower()
            if(power == 1){
                super.getCommand("Turn on","cleaner")
                console.log("리모콘으로 청소기를 움직여 보세요.")
                while(input!=5){
                    await setMove()
                }
            }else
                super.getCommand("Turn off","cleaner")
            rl.pause()
        }
        main()
    }
}
const setPower = () => {
    return new Promise((resolve, reject) => {
      rl.question(" Turn on? Turn off  :",(str)=> {
          if(str == "Turn on"){
              power = 1
          }else
              power = 0;
        resolve()
      })
    })
}
const setMove = () => {
    return new Promise((resolve, reject) => {
      rl.question('현재위치 :('+now.y+','+now.x+')\n1. Left\n2. Right\n3. Up\n4. down\n5. 종료\n', (answer) => {
        if(answer==1){
            now.y++;
        }
        else if(answer==2){
            now.y--;      
        }
        else if(answer==3){
            now.x++;
        }
        else if(answer==4)
            now.x--;
        else input = 5;
        resolve()
      })
    })
}
module.exports = Cleaner