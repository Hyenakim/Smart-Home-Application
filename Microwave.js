const SmartAppliance =require('./SmartAppliance');
var add = 0
const rl_sync = require('readline-sync')
class Microwave extends SmartAppliance{
    constructor(){
        super('Microwave')
    }
    async setTime(){
      return new Promise((resolve, reject) => {
        console.log("몇초 돌리시겠습니까?");
        var answer = rl_sync.prompt()
          if(answer==-1){
              input = -1;
              resolve()
          }else{
            add = answer
            var ar = [];
            for(var i = 0; i < add; i++){
              ar.push(
                new Promise((resolve, reject) =>{
                  (function(x){
                    setTimeout(function(){
                      msg_time(resolve)
                    }, 1000*x);
                  })(i)
                })
              );
            }
            Promise.all(ar).then(function(){
              resolve()
            });
          }
      })
    }
}
function msg_time(resolve){
   process.stdout.write("■")
  if (add == 1) {      
    // 시간이 종료 되었으면..
    add = 0
    console.log("조리가 완료되었습니다.")
  }else{
    add = add - 1; // 남은시간 -1초
  }
  resolve()
}
module.exports = Microwave