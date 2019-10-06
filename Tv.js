const SmartAppliance =require('./SmartAppliance');
const Lamp =require('./Lamp');
var rl = require('readline');
var prompts = rl.createInterface(process.stdin, process.stdout, null);

class Tv extends SmartAppliance{
     
      constructor(channel,vol){
      super()
      this.channel = channel;
      this.vol = vol;
      prompts.question(" Turn on? Turn off  :",(str)=>{
       if(str == "Turn on"){
            super.getCommand(str,"Tv");
            prompts.pause();
         console.log('1. 볼륨 높이기');
        console.log('2. 볼륨 낮추기');
        console.log('3. 채널 높이기');
        console.log('4. 채널 낮추기');
        console.log('5. 설정 완료');  
         prompts.setPrompt('>');
         prompts.prompt()
         prompts.on('line',function(num){
       
          if(num==1){
           vol++;
            console.log("볼륨은 "+vol+" 입니다.");
            prompts.setPrompt('>');
            prompts.prompt()
             }
          else if(num==2){
           vol--;
           console.log("볼륨은 "+vol+" 입니다.");
           prompts.setPrompt('>');
         prompts.prompt()
          }
          else if(num==3){
            channel++;
            console.log("채널은 "+channel+"입니다.");
            prompts.setPrompt('>');
         prompts.prompt()
          }
          else if(num==4){
            channel--;
            console.log("채널은 "+channel+"입니다.");
            prompts.setPrompt('>');
         prompts.prompt()
          }
          else if(num==5){
            var lamp = new Lamp(2)
            lamp.getCommand("Turn on","Lamp")
             prompts.pause()
            }
           else{
              console.log('1과 5사이 숫자만 입력해주세요.')
              prompts.setPrompt('>');
              prompts.prompt()
           }  
        });
        }
     })
     }
   
}
module.exports = Tv
