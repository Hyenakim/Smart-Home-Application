const Tv = require('./Tv');
const Lamp = require('./Lamp')
const Water = require('./Water')
const Aircon = require('./Aircon')
const Cleaner = require('./Cleaner')
const Microwave = require('./Microwave')
const SmartAppliance = require('./SmartAppliance')

var aircon
var rl = require('readline');
var prompts = rl.createInterface({input: process.stdin,output:process.stdout,terminal:false});

class Client{
    

    weather(){
    var weather = require('weather-js');
    weather.find({search: 'Seoul, Korea', degreeType: 'C'}, function(err, result) {
        if(err) console.log(err);
        prompts.pause();
        console.log("현재 온도는 "+result[0].current.temperature+"도 입니다.");
        prompts.pause();
        if(result[0].current.temperature>25)  {
            prompts.pause();
        //var aircon = new Aircon(25);
        aircon.automatic(result[0].current.temperature)
        prompts.pause();
        display()
        } 
    });
    }       
        
    async display(){
        var cmd = 0;
        while(cmd != 5){
            console.log("==============================")
            console.log('관리하실 가전제품을 선택해주세요');
            console.log('-- 1. 티비 2.램프 3.정수기 4.에어컨 5.종료--');
            console.log("==============================")
            await new Promise((resolve, reject)=>{
                prompts.question("숫자를 입력해주세요: ",function(num){
                    cmd = num;
                    prompts.setPrompt('>');
                    prompts.prompt()
                    if(num==1){
                        //tv
                        console.log("티비입니다")
                        resolve();
                    }
                    else if(num==2){
                        //lamp
                        console.log("램프입니다")
                        resolve();
                    }
                    else if(num==3){
                        //water
                        console.log("정수기입니다")
                        resolve();
                    }
                    else if(num==4){
                        if(!aircon.getPower()){
                            aircon.setPower().then(()=>{
                                if(aircon.getPower()){
                                    setTimeout(()=>{
                                        aircon.setTemperature();
                                    })
                                    resolve();
                                }else{
                                    resolve();
                                }
                            })
                        }else{
                            setTimeout(()=>{
                                aircon.setTemperature();
                            })
                            resolve();
                        }
                    }
                });
            });
        }
    }
}
const client = new Client
client.weather();
