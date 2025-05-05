import {CurrentUser, CurrentUserDto} from '@app/auth';
import {CreateProjectDto} from '@app/dto/identity/CreateProject.dto';
import {UpdateProjectDto} from '@app/dto/identity/UpdateProject.dto';
import {IdParamDto} from '@app/validation';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import {ProjectsService} from '../../services/projects/projects.service';

@Controller()
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post('create')
  async registerNewProject(
    @CurrentUser() {requestingUserId}: CurrentUserDto,
    @Body() createProjectDto: CreateProjectDto,
  ) {
    return this.projectsService.createProject(
      requestingUserId,
      createProjectDto,
    );
  }

  @Get('where-involved')
  async getProjectsWhereInvolved(
    @CurrentUser() {requestingUserId}: CurrentUserDto,
  ) {
    return this.projectsService.getProjectsWhereInvolved(requestingUserId);
  }

  @Get('for-client/:id')
  async getProjectsForClient(
    @CurrentUser() {requestingUserId}: CurrentUserDto,
    @Param() {id: clientId}: IdParamDto,
  ) {
    return this.projectsService.getProjectsForClient(
      requestingUserId,
      clientId,
    );
  }

  @Get(':id')
  async getProjectById(
    @CurrentUser() {requestingUserId}: CurrentUserDto,
    @Param() {id: projectId}: IdParamDto,
  ) {
    return this.projectsService.getProjectById(requestingUserId, projectId);
  }

  @Put(':id')
  async updateProjectById(
    @CurrentUser() {requestingUserId}: CurrentUserDto,
    @Param() {id: projectId}: IdParamDto,
    @Body() updateProjectDto: UpdateProjectDto,
  ) {
    return this.projectsService.updateProjectById(
      requestingUserId,
      projectId,
      updateProjectDto,
    );
  }

  @Delete(':id')
  async deleteProjectById(
    @CurrentUser() {requestingUserId}: CurrentUserDto,
    @Param() {id: projectId}: IdParamDto,
  ) {
    return this.projectsService.deleteProjectById(requestingUserId, projectId);
  }

  @Post('for-client/:id')
  async createProjectForClient(
    @CurrentUser() {requestingUserId}: CurrentUserDto,
    @Param() {id: clientId}: IdParamDto,
    @Body() createProjectDto: CreateProjectDto,
  ) {
    if (clientId !== createProjectDto.clientId) {
      throw new BadRequestException('Client ID in URL does not match body');
    }
    return this.projectsService.createProject(
      requestingUserId,
      createProjectDto,
    );
  }
}
