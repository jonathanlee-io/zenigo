export class ProjectCreatedEvent {
  static readonly eventName = 'project.created';

  constructor(
    public readonly requestingUserEmail: string,
    public readonly projectId: string,
  ) {}
}
