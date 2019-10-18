const Tv = require('./Tv');
const Lamp = require('./Lamp')
const Water = require('./Water')
const Aircon = require('./Aircon')
const Cleaner = require('./Cleaner')
const Microwave = require('./Microwave')
const SmartAppliance = require('./SmartAppliance')
var rl_sync = require('readline-sync')
const request = require('request');
var cheerio = require('cheerio');
var tv
var lamp
var water
var aircon
var cleaner
var microwave 
var title = new Array()
var date = new Array()
const url = "https://trends.google.co.kr/trends/trendingsearches/daily/rss?geo=KR"
var rl = require('readline');
var prompts = rl.createInterface({input: process.stdin,output:process.stdout,terminal:false});
class Client{
    constructor(){   
        var weather = require('weather-js');
        tv = new Tv(10,6)
        lamp = new Lamp(2)
        water = new Water(50,'500ml')
        aircon = new Aircon(0)
        cleaner = new Cleaner()
        microwave = new Microwave()
        weather.find({search: 'Seoul, Korea', degreeType: 'C'}, function(err, result) {
           aircon = new Aircon(result[0].current.temperature);
        })
    }
    weather(){
        var weather = require('weather-js');
        weather.find({search: 'Seoul, Korea', degreeType: 'C'}, function(err, result) {
            if(err) console.log(err);
            console.log("현재 온도는 "+result[0].current.temperature+"도 입니다.");
            prompts.pause();
            if(result[0].current.temperature>25)  {
            aircon.automatic(result[0].current.temperature)
            prompts.pause();
            } 
        });
    }              
    async display(){
        while(true){
            console.log("=====================================================================")
            console.log('                   관리하실 가전제품을 선택해주세요');
            console.log('-- 1. 티비 2.램프 3.정수기 4.에어컨 5.청소기 6.전자레인지 --');
            console.log('-- 7.취침모드 8.외출 9.실시간 검색 10.종료 --');
            console.log("=====================================================================")
            console.log('숫자를 입력해주세요')
            const num = rl_sync.prompt()
            await new Promise((resolve, reject)=>{
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
                                if(aircon.getPower())
                                    aircon.setTemperature().then(()=>{resolve()})      
                                else
                                    resolve()
                            })
                        }else
                            aircon.setTemperature().then(()=>{resolve()})
                    }
                    else if(num==5){    //청소기
                        if(!cleaner.getPower()){
                            cleaner.setPower().then(()=>{
                                if(cleaner.getPower())
                                    cleaner.setMove().then(()=>{resolve()})      
                                else
                                    resolve()
                            })
                        }else
                            cleaner.setMove().then(()=>{resolve()})
                    }
                    else if(num==6){    //전자레인지
                        if(!microwave.getPower()){
                            microwave.setPower().then(()=>{
                                if(microwave.getPower())
                                    microwave.setTime().then(()=>{resolve()})      
                                else
                                    resolve()
                            })
                        }else
                            microwave.setTime().then(()=>{resolve()})
                    }
                    else if(num==7){
                        console.log("취침모드 On / Off?");
                        var mode = rl_sync.prompt();
                        if(mode == "On"){
                            tv.sleep = true;
                            lamp.sleep = true;
                            water.sleep = true;
                            aircon.sleep = true;
                            cleaner.sleep = true;
                            microwave.sleep = true;
                            console.log("취침모드로 전환되었습니다.")
                        }else{
                            tv.sleep = false;
                            lamp.sleep = false;
                            water.sleep = false;
                            aircon.sleep = false;
                            cleaner.sleep = false;
                            microwave.sleep = false;
                            console.log("취침모드가 꺼졌습니다.")
                        }
                        resolve()
                    }
                    else if(num==8){    //전체 종료
                        tv.power = false;
                        lamp.power = false;
                        water.power = false;
                        aircon.power = false;
                        cleaner.power = false;
                        microwave.power = false;
                        console.log("모든 전원이 꺼졌습니다.")
                        resolve()
                    }
                    else if(num==9){
                        console.log('-------일별 인기 급상승 검색어-------')
                        request(url, (error, response, body) => {
                            if (error) throw error;
                            var $ = cheerio.load(body);
                            $('item').each(function(){
                               var pubDate;
                               pubDate = $(this).children('pubDate').text()
                               var arr = pubDate.split(' ')
                               var darr = arr[1]+" "+arr[2]+" "+arr[3]
                               date.push(darr)
                              })
                            $('item').each(function(){
                              title.push($(this).children('title').text())
                            })
                            for(let i=0;i<title.length;i++){
                               console.log(date[i],title[i])
                               }
                               resolve();
                            })
                    }
            });
        }
    }
}
const client = new Client
client.weather();
setTimeout(client.display,1000)
