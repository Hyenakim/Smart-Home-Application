const SmartAppliance =require('./SmartAppliance');
var rl = require('readline');
var prompts = rl.createInterface({input: process.stdin,output:process.stdout,terminal:false});
class Water extends SmartAppliance{
    constructor(temp,liter){
        super()
        this.liter = liter;
        this.temp = temp;
         
             prompts.question('온도를 선택해주세요:',(temperature)=>{
                this.temp = temperature;
                prompts.question('정량을 선택해주세요(한컵, 두컵):',(insert)=>{
                    this.liter= insert;
                    console.log(this.temp+"도의 물 "+this.liter+"만큼 나옵니다.")
                    prompts.close();
                 })
            })
            
             
                }
              
             };

   

module.exports = Water