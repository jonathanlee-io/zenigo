import {NestFactory} from '@nestjs/core';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';

export const createRabbitMQMicroservice = async ({
  module,
  queueName,
  rabbitMqUrls,
}: {
  module: unknown;
  queueName: string;
  rabbitMqUrls: string;
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
        urls: rabbitMqUrls,
        lazyConnect: false,
      },
    },
  );
};
