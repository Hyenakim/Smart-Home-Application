const SmartAppliance =require('./SmartAppliance');
var rl_sync = require('readline-sync')
var r2_sync = require('readline-sync')
class Water extends SmartAppliance{
    constructor(temp,liter){
        super("Water");
        this.temp=temp;
        this.liter=liter;
    }
    async menu(){
        await new Promise((resolve,reject)=>{
            console.log('온도를 선택해주세요:')
            this.temp= rl_sync.prompt()
            console.log('정량을 선택해주세요(500mL,1L):')
            this.liter = r2_sync.prompt()
            console.log(this.temp+"도의 물 "+this.liter+"만큼 나옵니다.")
            resolve();
        })
        }
        
            
            }
        

   

module.exports = Water