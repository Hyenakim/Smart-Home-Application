const Tv = require('./Tv');
const Lamp = require('./Lamp')
const Water = require('./Water')
const Aircon = require('./Aircon')
const Cleaner = require('./Cleaner')
const Microwave = require('./Microwave')
const SmartAppliance = require('./SmartAppliance')
var tv
var aircon
var lamp
var water
var rl_sync = require('readline-sync')
var loopContinue = true;
var n =1;
class Client{
    
    weather(){
    var weather = require('weather-js');
    aircon = new Aircon(0);
    weather.find({search: 'Seoul, Korea', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
        console.log("현재 온도는 "+result[0].current.temperature+"도 입니다.");
        
        if(result[0].current.temperature>25)  {
        //var aircon = new Aircon(25);
        aircon.automatic(result[0].current.temperature)
       
        } 
        });
    } 
}
 
 async function display(){
    while(true){
    console.log("==============================")
    console.log('관리하실 가전제품을 선택해주세요');
    console.log('-- 1. 티비 2.램프 3.정수기 4.에어컨 5.청소기 6.전자레인지 7.종료--');
    console.log("==============================")  
    console.log('숫자를 입력해주세요')
        const num = rl_sync.prompt()
        await doWork(num).catch(()=>{loopContinue=false});
        // prompts.question("숫자를 입력해주세요: ",async(num)=>{
        //     cmd = num;
        //     prompts.setPrompt('>');
        //     prompts.prompt()
        //     await (doWork(cmd).catch(() => { loopContinue=false; }));
        //    })
    }
    }   
    function doWork(num){      
    return new Promise((resolve,reject)=>{
              if(num==1){
                  //tv
                  tv = new Tv(10,6)
                   setTimeout(() => {
                  resolve('ok')
                    }, 1000);
              }
              else if(num==2){
                 lamp = new Lamp(2);
                 setTimeout(() => {
                    resolve('ok')
                    }, 1000);
              
              }               
              else if(num==3){
                  //water
                 water = new Water(50,'한컵');
                 setTimeout(() => {
                    resolve('ok')
                    }, 1000);
              
              }
            //   else if(num==4){
            //       if(!aircon.getPower()){
            //           aircon.setPower().then(()=>{
            //               if(aircon.getPower()){
            //                   setTimeout(()=>{
            //                       aircon.setTemperature();
            //                   })
            //                   resolve();
            //               }else{
            //                   resolve();
            //               }
            //           })
            //        }else{
            //           setTimeout(()=>{
            //               aircon.setTemperature();
            //           })
            //           resolve();
                     
            //       }
                  
            //   }
              else reject('done');
    })
  }    
client = new Client
client.weather();
setTimeout(()=>display(),1000)


function print_line(){
    for(let i =0 ;i<30;i++){
        process.stdout.write('--');
        console.log('')
    }
}
