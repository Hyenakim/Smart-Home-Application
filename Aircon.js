const SmartAppliance =require('./SmartAppliance');
var rl_sync = require('readline-sync')

class Aircon extends SmartAppliance{
    constructor(temperature){
        super("Aircon")
        this.temp = temperature;
    }
    async setTemperature(){
        return new Promise((resolve,reject)=>{
            var answer = 0
            console.log('현재온도 :'+this.temp+'\n1. 온도 낮춤\n2. 온도 높임\n3. 종료')
            while(answer!=3){
                answer = rl_sync.prompt();
                if(answer==1){
                    this.temp--;
                    console.log(this.temp+"도로 변경되었습니다.")
                    resolve()
                }
                else if(answer==2){
                    this.temp++;      
                    console.log(this.temp+"도로 변경되었습니다.")
                    resolve()
                }else{
                    resolve()
                }
            }
        })
    }
    automatic(temperature){
        if(temperature>25){
            this.temp = 25;
            console.log("--> 25도로 실내온도를 맞춥니다");
        }
        else if(temperature<14){
            this.temp=14;
            console.log("--> 14도로 실내온도를 맞춥니다.")
        }
    }
}
module.exports = Aircon