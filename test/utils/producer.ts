import { kafka } from "./client";
import readline from "readline";
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

(async () => {
  const producer = kafka.producer();
  console.log("Connecting producer");
  await producer.connect();
  console.log("Producer connected sucessfully");
  r1.setPrompt("> ");
  r1.prompt();

  r1.on("line", async function (line) {
    const [riderName,location]= line.split(" ");
    await producer.send({
        topic:"rider-updates",
        messages:[
            {
                partition:location.toLowerCase()==="north"?0:1,
                key:"location-update",
                value:JSON.stringify({name:riderName,location}),
            }
        ]
    })
  }).on("close",async ()=>{
    await producer.disconnect();
  });
})();
