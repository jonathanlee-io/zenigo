import {NestFactory} from '@nestjs/core';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';

export const createRabbitMQMicroservice = async ({
  module,
  rabbitMqHost,
  rabbitMqPort,
  rabbitMqUser,
  rabbitMqPassword,
  queueName,
}: {
  module: unknown;
  queueName: string;
  rabbitMqHost: string;
  rabbitMqPort: number;
  rabbitMqUser: string;
  rabbitMqPassword: string;
}) => {
  return NestFactory.createMicroservice<MicroserviceOptions>(
    // @ts-expect-error the module parameter being IEntryNestModule (not exported from @nestjs/common)
    module,
    {
      transport: Transport.RMQ,
      options: {
        queue: queueName,
        queueOptions: {
          durable: true,
        },
        noAck: true,
        url: `amqp://${rabbitMqUser}:${rabbitMqPassword}@${rabbitMqHost}:${rabbitMqPort}`,
        urls: [
          `amqp://${rabbitMqUser}:${rabbitMqPassword}@${rabbitMqHost}:${rabbitMqPort}`,
        ],
        lazyConnect: false,
        host: rabbitMqHost,
        port: rabbitMqPort,
        user: rabbitMqUser,
        password: rabbitMqPassword,
      },
    },
  );
};
