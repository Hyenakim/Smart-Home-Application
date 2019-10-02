var power = false;
var channel = 1;
function On(){
    if(!power)
        power = true;
    else
        Console.log("이미 켜져있습니다.");
}
function Off(){
    if(power)
        power = false;
    else
        Console.log("이미 꺼져있습니다.");
}
function SetChannel(n){
    if(channel == n){
        Console.log("현재 "+n+"번 채널을 시청하고 계십니다.");
        channel = n;
    }
    else
        Console.log("채널이 "+n+"번으로 변경되었습니다");
}
module.exports.on = On;
module.exports.off = Off;
module.exports.setChannel = SetChannel;