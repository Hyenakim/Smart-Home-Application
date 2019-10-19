const SmartAppliance = require('./SmartAppliance');
const rl_sync = require('readline-sync')
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
            console.log('현재위치 :('+now.y+','+now.x+')\n1. Left 2. Right 3. Up 4. down 5. 멈추기')
            while(answer != 5){    
                answer = rl_sync.prompt()
                if(answer==1){ now.y++; resolve() }
                else if(answer==2){ now.y--; resolve() }
                else if(answer==3){ now.x++; resolve() }
                else if(answer==4){ now.x--; resolve() }
                else { resolve(); }
                console.log('현재위치 :('+now.y+','+now.x+')')
            }
        })
    }
}
module.exports = Cleaner