import {NestFactory} from '@nestjs/core';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';

export const createRabbitMQMicroservice = async ({
  module,
  queueName,
  rabbitMqUrls,
}: {
  module: unknown;
  queueName: string;
  rabbitMqUrls: string[];
}) => {
  return NestFactory.createMicroservice<MicroserviceOptions>(module as any, {
    transport: Transport.RMQ,
    options: {
      queue: queueName,
      queueOptions: {
        durable: true,
      },
      noAck: true,
      urls: rabbitMqUrls,
    },
  });
};
