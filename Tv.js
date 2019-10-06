const SmartAppliance =require('./SmartAppliance');
const Lamp =require('./Lamp');
var rl = require('readline');
var prompts = rl.createInterface({input:process.stdin,output:process.stdout});

class Tv extends SmartAppliance{
 
      constructor(channel,vol){
      super()
      this.channel = channel;
      this.vol = vol;
        prompts.question(" Turn on? Turn off  :",(str)=>{
           super.getCommand(str,"Tv");
          
           if(str == "Turn on"){
            console.log('1. 볼륨 높이기');
           console.log('2. 볼륨 낮추기');
           console.log('3. 채널 높이기');
           console.log('4. 채널 낮추기');
             
            prompts.setPrompt('>');
            prompts.prompt()
            prompts.on('line',function(num){
          
             if(num==1){
               vol++;
               console.log("볼륨은 "+vol+" 입니다.");
              
                }
             else if(num==2){
              vol--;
              console.log("볼륨은 "+vol+" 입니다.");
              
             }
             else if(num==3){
               vol++;
               console.log("채널은 "+channel+"입니다.");
               
             }
             else if(num==4){
               vol--;
               console.log("채널은 "+channel+"입니다.");
               
             }
             else if(num==5){
           
            
             }
           
            var lamp = new Lamp(2);
            lamp.getCommand("Turn on","Lamp")
            lamp.turn_on();
             });
         
          }
        
       })
     
      }
   
}
module.exports = Tv