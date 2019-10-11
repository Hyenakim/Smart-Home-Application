const SmartAppliance =require('./SmartAppliance');
var rl = require('readline');
var prompts = rl.createInterface({input: process.stdin,output:process.stdout,terminal:false});
class Lamp extends SmartAppliance{
    constructor(brightness){
    super();
    this.brightness = brightness;
    prompts.question(" On? Off  :",(str)=>{
       if(str == "On"){
            super.getCommand(str,"Lamp");
            prompts.pause();
        console.log('---     밝기 선택     ---');
        console.log('---  1단계 수면, 휴식  ---');
        console.log('---  2단계 독서,일상   ---');
        console.log('---  3단계 공부,사무   ---');  
        prompts.question('밝기를 선택해주세요: ',(light)=>{
            if(light==1){
                   this.brightness=1;
                   console.log('\n밝기 1단계입니다.');
                   prompts.pause();
                }
                else if(light==2){
                this.brightness=2; 
                 console.log('\n밝기 2단계입니다.');
                prompts.pause();
                }
                else if(light==3){
                    this.brightness=3; 
                     console.log('\n밝기 3단계입니다.');
                     prompts.pause();
                 }
             })
            
        }
        else if(str == "Off"){
            console.log('\n');
            super.getCommand(str,"Lamp");
            prompts.pause();
        }
    })
    }
}
module.exports = Lamp