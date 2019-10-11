const SmartAppliance =require('./SmartAppliance');
var tid
var power = 0
var input = 0
var add = 0
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal:false
})
class Microwave extends SmartAppliance{
    constructor(){
        super()
        const main = async () => {
            await setPower()
            if(power == 1){
                super.getCommand("Turn on","Microwave")
                while(input!=-1){
                    await setTime()
                }
            }else{
                super.getCommand("Turn off","Microwave")
            }
            rl.pause()
        }
        main()
    }
}
const setPower = () => {
    return new Promise((resolve, reject) => {
      rl.question(" Turn on? Turn off  :",(str)=> {
          if(str == "Turn on"){
              power = 1
          }else
              power = 0;
        resolve()
      })
    })
  }
const setTime = () => {
    return new Promise((resolve, reject) => {
      rl.question('몇초 돌리시겠습니까? (종료:-1)\n', (answer) => {
        if(answer==-1){
            input = -1;
            resolve()
        }else{
            add = answer
            var ar = [];
            for(i = 0; i < add; i++){
              ar.push(new Promise((resolve, reject) =>{
                (function(x){
                  setTimeout(function(){
                    msg_time(resolve)
                  }, 1000*x);
                })(i)
              }));
            }
            Promise.all(ar).then(function(){
              resolve()
              });
        }
      })
    })
}
function msg_time(resolve){
   process.stdout.write("■")
  if (add == 1) {      
    // 시간이 종료 되었으면..
    add = 0
    console.log("조리가 완료되었습니다.")
    clearInterval(tid);   // 타이머 해제
  }else{
    add = add - 1; // 남은시간 -1초
  }
  resolve()
}
module.exports = Microwave