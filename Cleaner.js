const SmartAppliance = require('./SmartAppliance');
var power = 0
var input = 0
const readline = require('readline')
const rl_sync = require('readline-sync')
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
        super('Cleaner')
    }
    async setMove(){
        await new Promise((resolve, reject) => {
            var answer = 0
            while(answer != 5){
                console.log('현재위치 :('+now.y+','+now.x+')\n1. Left 2. Right 3. Up 4. down 5. 멈추기\n')
                answer = rl_sync.prompt()
            //rl.question('현재위치 :('+now.y+','+now.x+')\n1. Left 2. Right 3. Up 4. down 5. 멈추기\n', (answer) => {
                if(answer==1){
                    now.y++;
                    resolve()
                }
                else if(answer==2){
                    now.y--;      
                    resolve()
                }
                else if(answer==3){
                    now.x++;
                    resolve()
                }
                else if(answer==4){
                    now.x--;
                    resolve()
                }
                else {
                    resolve();
                }
            //})
            }
        })
    }
}
module.exports = Cleaner