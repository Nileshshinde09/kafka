import { kafka } from "./client";
(async () => {
    try {
    const group = process.argv[1];
    const consumer = kafka.consumer({ groupId: group! });
    console.log("Consumer is connecting...");
    await consumer.connect();
    console.log("Consumer is successfully connected...");
    await consumer.subscribe({
      topics: ["rider-updates"],
      fromBeginning: true,
    });
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const prefix = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`;
        console.log(`- ${prefix} ${message.key}#${message.value}`);
      },
    });
  } catch (err: any) {
    console.error(`[example/consumer] ${err.message}`, err);
  }
})();
