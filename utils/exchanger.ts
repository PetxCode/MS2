import amqp from "amqplib/callback_api";
import { authTestEntity } from "../model/authTestModel";
import { authEntity } from "../model/authModel";
import jwt_decode from "jwt-decode";

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
            console.log("viewing user content: ", message.content.toString());
            let content: any = message.content.toString();
            let decoded: any = jwt_decode(content);
            console.log("viewing user content: ", decoded);

            const check = await authEntity.findOne({
              where: { userID: decoded?.id },
            });

            if (check) {
              console.log("reaedy");
              return await authEntity
                .merge(check, {
                  token: content?.token,
                  userID: decoded?.id,
                })
                .save();
            } else {
              await authEntity.create({ token: content }).save();
            }
          });
        }
      });
    }
  });
};
