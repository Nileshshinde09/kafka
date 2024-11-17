import { Kafka } from "kafkajs";
import ip from "ip";
export const kafka = new Kafka({
  clientId: "my-app",
  brokers: [`${ip.address()}:9092`],
});
