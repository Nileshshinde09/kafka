import { kafka } from "./client";
(async () => {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  admin.connect();
  console.log("Admin connection success..");
  console.log("Creating topic [rider-updates]");

  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic created success [rider-updates]");
  console.log("Disconnecting Admin..");
  await admin.disconnect();
})();
