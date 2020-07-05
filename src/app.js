import { RTMClient } from "@slack/rtm-api"
import { API_TOKEN } from './index.js'

const rtm = new RTMClient(API_TOKEN);
console.log("API TOKEN : ", API_TOKEN);

rtm.start()
    .catch(console.error);

rtm.on('ready', async () => {
   console.log('Linda J is here')
});