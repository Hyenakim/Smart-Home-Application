const say = require('say');
const prompts = require('prompt')
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
    call(){
        console.log('s')
    }
    setPower(){
        return new Promise((resolve, reject)=>{
           
           prompts.get(['message'],(error,result)=>{
            console.log(result.message)
            switch(result.message){
               
                    case 'On':
                        say.speak(this.type+" Turn On");
                        this.power = true;
                        resolve();
                        break;
                        case 'Off':
                       say.speak("Appliance Turned Off");
                        this.power = false;
                        resolve();
                        break;
                        }
                    })
        });
    }

    // setPower(){
    //     return new Promise((resolve, reject)=>{
    //         console.log("Turn on? Turn off :")
    //         const str = rl_sync.prompt();
    //             switch(str){
    //                 case 'Turn on':
    //                     say.speak(this.type+" Turn On");
    //                     this.power = true;
    //                     //resolve()
    //                     break;
    //                 case 'Turn off':
    //                     say.speak("Appliance Turned Off");
    //                     this.power = false;
    //                     //resolve()
    //                     break;

    //             }
    //             resolve();
    //     })
    // }

    getPower(){
      return this.power;
    }
}
module.exports = SmartAppliance
