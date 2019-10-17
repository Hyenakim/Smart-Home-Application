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
    
   setPower(){
        return new Promise((resolve, reject)=>{
            console.log("On, Off ? : ");
            var result = rl_sync.prompt();
            switch(result){
                case 'On':
                    this.power = true;
                    say.speak(this.type+" Turn On", null, null, (err)=>{
                        resolve();
                    });
                    //resolve();
                    break;
                case 'Off':
                    say.speak("Appliance Turned Off");
                    this.power = false;
                    resolve();
                    break;
                }
            });
    }

    getPower(){
      return this.power;
    }
}
module.exports = SmartAppliance