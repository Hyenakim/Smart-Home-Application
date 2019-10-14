const SmartAppliance =require('./SmartAppliance');
var power = 0
var input = 0
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
})

class Aircon extends SmartAppliance{
    constructor(temperature){
        super("Aircon")
        this.temp = temperature;
    }
    setTemperature(){
          rl.question('현재온도 :'+this.temp+'\n1. 온도 낮춤\n2. 온도 높임\n', (answer) => {
            if(answer==1){
                this.temp--;
                console.log(this.temp+"도로 변경되었습니다.")
            }
            else if(answer==2){
                this.temp++;      
                console.log(this.temp+"도로 변경되었습니다.")
            }
          })
    }
    automatic(temperature){
        power=1;
        if(temperature>25){
            this.temp = 25;
            console.log("25도로 실내온도를 맞춥니다");
        }
        else if(temperature<10){
            this.temp=10;
            console.log("18도로 실내온도를 맞춥니다.")
        }
    }
}
module.exports = Aircon









// const setPower = () => {
//   return new Promise((resolve, reject) => {
//     rl.question(" Turn on? Turn off  :",(str)=> {
//         if(str == "Turn on"){
//             power = 1
//         }else
//             power = 0;
//       resolve()
//     })
//   })
// }

