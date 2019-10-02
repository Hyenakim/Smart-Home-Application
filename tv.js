var power
var channel
function On(){
    console.log(power)
    if(power)
        console.log("이미 켜져있습니다.");
    else{
        power = true;
        console.log("tv가 켜졌습니다.");
    }
    return power   
}
function Off(){
    if(!power)
        console.log("이미 꺼져있습니다.");
    else{
        power = false;
        console.log("tv가 꺼졌습니다.");
    }
    return poser
}
function SetChannel(n){
    console.log(channel);
    if(channel == n){
        console.log("현재 "+n+"번 채널을 시청하고 계십니다.");
        channel = n;
    }
    else
        console.log("채널이 "+n+"번으로 변경되었습니다.");
    return channel
}
module.exports.power = power;
module.exports.channel = channel;
module.exports.on = On;
module.exports.off = Off;
module.exports.setChannel = SetChannel;