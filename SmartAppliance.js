const say = require('say');
const prompt = require('prompt')
//var power;
const readline = require('readline')
const rl_sync = require('readline-sync')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
})
class SmartAppliance{
    constructor(type){
        this.power = false;
        this.type = type;
    }
    getCommand(command,app){
        switch(command){
            case 'On':
                console.log(app+" Turn On")
                say.speak(app+" Turn On")
                    break;
            case 'Off':
                console.log(app+" Turned Off")    
                say.speak(app+ "Turned Off")
                break;
            default:
                console.log('뭔가 이상합니다')
        
        }
    }
    
    // getCommand(command,app){
    //     switch(command){
    //         case 'Turn on':
    //             say.speak(app+" Turn On")
    //             break;
    //         case 'Turn off':
    //             say.speak("Appliance Turned Off")
    //             break;

    //     }
    // }
    call(){
        console.log('s')
    }

    setPower(){
        return new Promise((resolve, reject)=>{
            rl_sync.question(" Turn on? Turn off  :",(str)=> {
                switch(str){
                    case 'Turn on':
                        say.speak(this.type+" Turn On");
                        this.power = true;
                        break;
                    case 'Turn off':
                        say.speak("Appliance Turned Off");
                        this.power = false;
                        break;

                }
                resolve();
            })
        });
    }

    getPower(){
      return this.power;
    }
}
// const setPower = () => {
//     return new Promise((resolve, reject) => {
//         console.log("헤헤")
//       rl.question(" Turn on? Turn off  :",(str)=> {
//           if(str == "Turn on"){
//               power = 1
//           }else
//               power = 0;
//         resolve()
//       })
//     })
//   }
  

module.exports = SmartAppliance
