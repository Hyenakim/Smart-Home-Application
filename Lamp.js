const SmartAppliance =require('./SmartAppliance');
var rl = require('readline');
var prompts = rl.createInterface({input:process.stdin});
class Lamp extends SmartAppliance{
    constructor(brightness){
    super()
    this.brightness = brightness
    }
    turn_on(){
        console.log('---  1단계 수면, 휴식  ---');
        console.log('---  2단계 독서,일상   ---');
        console.log('---  3단계 공부,사무   ---');   
        prompts.setPrompt('>');
        prompts.prompt()
        prompts.on('line',(light)=>{
                if(light==1){
                   this.brightness=1;
                   console.log('밝기 1단계입니다.');
                }
                else if(light==2){
                this.brightness=2; 
                 console.log('밝기 2입니다.');
                }
                else if(light==3){
                    this.brightness=3; 
                     console.log('밝기 3입니다.');
                 }
                 
    })
    // prompts.question(" Turn on? Turn off  :",(str)=>{
    //     super.getCommand(str,"Lamp")
    //        if(str == "Turn on"){
    //        console.log('1. 수면,휴식');
    //        console.log('2. 독서,일상');
    //        console.log('3. 공부,사무');   
    //        prompts.question("> ",(num)=>{
    //         if(num==1){
    //             brightness=1;
    //            console.log('밝기 1단계입니다.');
    //         }
    //         else if(num==2){
    //         brightness=2; 
    //          console.log('밝기 2입니다.');
    //         }
    //         else if(num==3){
    //             brightness=3; 
    //              console.log('밝기 3입니다.');
    //          }
    //     })
           
//     }

//    })

// }
    }
}
module.exports = Lamp