const Tv = require('./Tv');
const Lamp = require('./Lamp')
const Water = require('./Water')
var rl = require('readline');
var prompts = rl.createInterface({input: process.stdin,output:process.stdout,terminal:false});
class Client{
    
        switch(){
        console.log('관리하실 가전제품을 선택해주세요');
        console.log('-- 1. 티비 2.램프 3.정수기 --');
        prompts.question("숫자를 입력해주세요: ",function(num){
            prompts.setPrompt('>');
            prompts.prompt()
            if(num==1){
                 var tv = new Tv(10,60);
                 
             }
             else if(num==2){
                 var lamp = new Lamp(1);
                lamp.getCommand("Turn on","Lamp");
                lamp.turn_on()
             }
            else if(num==3){
                var water = new Water(50,100)

            }
           
        });
        

    }
    }
const client = new Client
client.switch()
