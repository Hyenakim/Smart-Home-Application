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
    constructor(){
        var weather = require('weather-js');
        aircon = new Aircon(0);
        weather.find({search: 'Seoul, Korea', degreeType: 'C'}, function(err, result) {
            aircon = new Aircon(result[0].current.temperature);
        })
        
        //this.tv = new Tv(10,60);
        //this.lamp = new Lamp(1);
        //this.water = new Water(50,100);
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
        while(cmd != 5){
            console.log('관리하실 가전제품을 선택해주세요');
            console.log('-- 1. 티비 2.램프 3.정수기 4.에어컨 --');
            await new Promise((resolve, reject)=>{
                prompts.question("숫자를 입력해주세요: ",function(num){
                    cmd = num;
                    prompts.setPrompt('>');
                    prompts.prompt()
                    if(num==1){
                        //tv
                    }
                    else if(num==2){
                        //lamp
                    }
                    else if(num==3){
                        //water
                    }
                    else if(num==4){
                        if(!aircon.getPower()){
                            aircon.setPower().then(()=>{
                                if(aircon.getPower()){
                                    aircon.setTemperature();
                                    resolve();
                                }
                            })
                        }else{
                            aircon.setTemperature();
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
setTimeout(client.display,1000)