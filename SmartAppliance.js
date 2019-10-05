const say = require('say');
const prompt = require('prompt')
class SmartAppliance{
    getCommand(command,app){
        switch(command){
            case 'Turn on':
                say.speak(app+" Turn On")
                break;
            case 'Turn off':
                say.speak("Appliance Turned Off")
                break;

        }
    }
    call(){
        console.log('s')
    }
}

module.exports = SmartAppliance