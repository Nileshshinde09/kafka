

# Kafka

## Commands
- Start Zookeper Container and expose PORT `2181`.
```bash
docker run -p 2181:2181 zookeeper
```
- Start Kafka Container, expose PORT `9092` and setup ENV variables.
```bash
docker run -p 9092:9092 \
-e KAFKA_ZOOKEEPER_CONNECT=<PRIVATE_IP>:2181 \
-e KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://<PRIVATE_IP>:9092 \
-e KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR=1 \
confluentinc/cp-kafka
```

## Running Locally
- Run Multiple Consumers
```bash
bun run utils/consumer.ts <GROUP_NAME>
```
- Create Producer
```bash
bun run utils/producer.ts
```
```bash
> tony south
> tony north
```


## To install dependencies:

```bash
bun install
```

To run:

```bash
bun run <file-path>.ts
```