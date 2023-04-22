import amqp from "amqplib/callback_api";
import { authTestEntity } from "../model/authTestModel";

const url = "amqp://guest:guest@localhost:5672";

export const exchanger = (path: string) => {
  amqp.connect(url, (err: Error, connection: amqp.Connection) => {
    if (err) {
      throw err;
    } else {
      connection.createChannel((err: Error, channel: amqp.Channel) => {
        if (err) {
          throw err;
        } else {
          channel.assertQueue(path, { durable: false });

          channel.consume(path, async (message: amqp.Message | null) => {
            console.log(message.content.toString());
            await authTestEntity
              .create({ token: message.content.toString() })
              .save();
          });
        }
      });
    }
  });
};
