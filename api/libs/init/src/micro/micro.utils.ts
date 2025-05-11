import {NestFactory} from '@nestjs/core';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';

export const createRabbitMQMicroservice = async (
  module: unknown,
  rabbitMqUrls: string[],
  queueName: string,
) => {
  // @ts-expect-error the module parameter being IEntryNestModule (not exported from @nestjs/common)
  return NestFactory.createMicroservice<MicroserviceOptions>(module, {
    transport: Transport.RMQ,
    options: {
      urls: rabbitMqUrls,
      queue: queueName,
      queueOptions: {
        durable: true,
      },
      noAck: true,
      host: '127.0.0.1',
      port: 5673,
    },
  });
};
