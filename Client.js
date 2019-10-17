const Tv = require('./Tv');
const Lamp = require('./Lamp')
const Water = require('./Water')
const Aircon = require('./Aircon')
const Cleaner = require('./Cleaner')
const Microwave = require('./Microwave')
const SmartAppliance = require('./SmartAppliance')
var rl_sync = require('readline-sync')
var tv
var lamp
var water
var aircon
var cleaner
var microwave
var rl = require('readline');
var prompts = rl.createInterface({input: process.stdin,output:process.stdout,terminal:false});
class Client{
    constructor(){
        
        var weather = require('weather-js');
        aircon = new Aircon(0);
        tv = new Tv(10,6)
        lamp = new Lamp(2)
        water = new Water(50,'500ml')
        weather.find({search: 'Seoul, Korea', degreeType: 'C'}, function(err, result) {
           aircon = new Aircon(result[0].current.temperature);
        })
        
       // cleaner = new Cleaner();
        //microwave = new Microwave();
    }

    weather(){
    var weather = require('weather-js');
    weather.find({search: 'Seoul, Korea', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
        console.log("현재 온도는 "+result[0].current.temperature+"도 입니다.");
        prompts.pause();
        if(result[0].current.temperature>25)  {
        //var aircon = new Aircon(25);
        aircon.automatic(result[0].current.temperature)
        prompts.pause();
        } 

    });
    }       
        
    async display(){
        var cmd = 0;
        while(cmd != 7){
            console.log("==============================")
            console.log('관리하실 가전제품을 선택해주세요');
            console.log('-- 1. 티비 2.램프 3.정수기 4.에어컨 5.청소기 6.전자레인지 7.종료--');
            console.log("==============================")
            console.log('숫자를 입력해주세요')
            const num = rl_sync.prompt()
            await new Promise((resolve, reject)=>{
                // prompts.question("숫자를 입력해주세요: ",function(num){
                //     cmd = num;
                //     prompts.setPrompt('>');
                //     prompts.prompt()
                    if(num==1){
                        if(!tv.getPower()){
                           tv.setPower().then(()=>{
                                tv.menu().then(()=>{
                                    resolve();
                                })
                            })
                        }else{
                            tv.menu().then(()=>{
                                resolve();
                            })
                        }
                    }
                    else if(num==2){
                        if(!lamp.getPower()){
                            lamp.setPower().then(()=>{
                                 lamp.menu().then(()=>{
                                     resolve();
                                 })
                             })
                         }else{
                             lamp.menu().then(()=>{
                                 resolve();
                             })
                         }
                    }
                    else if(num==3){
                        if(!water.getPower()){
                            water.setPower().then(()=>{
                                water.menu().then(()=>{
                                    resolve();
                                })
                            })
                        }else{
                            water.menu().then(()=>{
                                resolve();
                            })
                        }
                    }
                    else if(num==4){    //에어컨
                        if(!aircon.getPower()){
                            aircon.setPower().then(()=>{
                                aircon.setTemperature().then(()=>{
                                    resolve();
                                })
                            })
                        }else{
                            aircon.setTemperature().then(()=>{
                                resolve();
                            })
                        }
                    }
                    else if(num==5){    //청소기
                        if(!cleaner.getPower()){
                            cleaner.setPower().then(()=>{
                                cleaner.setMove().then(()=>{
                                    resolve();
                                })
                            })
                        }else{
                            cleaner.setMove().then(()=>{
                                resolve();
                            })
                        } 
                    }
                    else if(num==6){    //전자레인지
                        if(!microwave.getPower()){
                            microwave.setPower().then(()=>{
                                microwave.setTime().then(()=>{
                                    resolve();
                                })
                            })
                        }else{
                            microwave.setTime().then(()=>{
                                resolve();
                            })
                        } 
                    }
                //});
            });
        }
    }
}
const client = new Client
client.weather();
setTimeout(client.display,1000)
