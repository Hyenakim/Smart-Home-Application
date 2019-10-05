const say = require('say')
const prompt = require('prompt')

prompt.start()
prompt.get(['message'],(error,result)=>{
   say.speak(result.message)
})



