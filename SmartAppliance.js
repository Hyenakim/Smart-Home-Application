const say = require('say');
const prompt = require('prompt')
class SmartAppliance{
    getCommand(command,app){
        switch(command){
            case 'On':
                console.log(app+" Turn On")
            say.speak(app+" Turn On")
                    break;
            case 'Off':
                console.log(app+" Turned Off")    
                 say.speak("Appliance Turned Off")
             break;
          
        }
    }
    call(){
        console.log('s')
    }
}

module.exports = SmartAppliance
