const SmartAppliance = require('./SmartAppliance');
const rl_sync = require('readline-sync')
class Microwave extends SmartAppliance {
    constructor() {
        super('Microwave')
    }
    setTime() {
        var sec = 0;
        console.log('몇초 돌리시겠습니까? (종료:-1)');
        sec = Number(rl_sync.prompt());
        if (sec > 0) {
            let start = new Date();
            let cnt = 0;
            while (true) {
                let now = new Date();
                let timeDiff = (now - start) / 1000; //[sec]
                if (timeDiff > cnt) {
                    if (timeDiff >= sec) {
                        process.stdout.write('\n');
                        console.log("조리가 완료되었습니다.");
                        break;
                    }
                    cnt++;
                    process.stdout.clearLine();
                    process.stdout.cursorTo(0); 
                    process.stdout.write('[');
                    for (let i = 0; i < cnt; i++) 
                        process.stdout.write(' ■');
                    for (let i = cnt; i < sec; i++) 
                        process.stdout.write(' ' + (1 + i));
                    process.stdout.write(' ]');
                }
            }
        }
    }
}
module.exports = Microwave