import {Logger, Module} from '@nestjs/common';

@Module({
  imports: [],
  // controllers: [AuthenticatedUsersController],
  providers: [
    {
      provide: Logger,
      useFactory: () => new Logger(UsersModule.name),
    },
    // AuthenticatedUsersService,
    // UsersRepositoryService,
  ],
  // exports: [UsersRepositoryService],
})
export class UsersModule {}
