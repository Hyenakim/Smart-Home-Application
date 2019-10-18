const say = require('say');
const prompts = require('prompt')
const readline = require('readline')
const rl_sync = require('readline-sync')
class SmartAppliance{
    constructor(type){
        this.power = false;
        this.type = type;
        this.sleep = false;
    }
    
   setPower(){
        return new Promise((resolve, reject)=>{

           console.log('On / Off?')
           var result = rl_sync.prompt();
            switch(result){
                case 'On':
                    this.power = true;
                    if(this.sleep==false)
                        say.speak(this.type+" Turn On",null,null,(err)=>{resolve()});
                    else resolve()
                    break;
                case 'Off':
                    this.power = false;
                    if(this.sleep==false)    
                        say.speak("Appliance Turned Off",null,null,(err)=>{resolve()});
                    else resolve()
                    break;
            }
        });
    }

    getPower(){
      return this.power;
    }
}
module.exports = SmartAppliance
