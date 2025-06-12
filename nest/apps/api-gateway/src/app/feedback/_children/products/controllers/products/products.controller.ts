import {CurrentUser, CurrentUserDto, IsPublic} from '@app/auth';
import {SubmitProductFeedbackRequestDto} from '@app/dto/feedback/SubmitProductFeedbackRequest.dto';
import {IdParamDto} from '@app/validation';
import {Body, Controller, Get, Ip, Param, Post, Query} from '@nestjs/common';

import {ProductsService} from '../../services/products/products.service';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @IsPublic()
  @Post('feedback')
  async receiveFeedback(
    @CurrentUser() {clientSubdomain}: CurrentUserDto,
    @Body()
    {
      userFeedback,
      widgetMetadataType,
      widgetMetadataUrl,
      widgetMetadataTimezone,
    }: SubmitProductFeedbackRequestDto,
    @Ip() ip: string,
  ) {
    return this.productsService.submitProductFeedback(
      {clientSubdomain, ip},
      {
        userFeedback,
        widgetMetadataType,
        widgetMetadataUrl,
        widgetMetadataTimezone,
      },
    );
  }

  @IsPublic()
  @Get('config')
  async getProductConfig(
    @CurrentUser() {clientSubdomain}: CurrentUserDto,
    @Ip() ip: string,
  ) {
    return this.productsService.getProductConfig({clientSubdomain, ip});
  }

  @Get('feedback/:id')
  async getFeedbackForProductById(
    @CurrentUser()
    {clientSubdomain, requestingUserId, requestingUserEmail}: CurrentUserDto,
    @Ip() ip: string,
    @Param() {id: projectId}: IdParamDto,
    @Query() {limit, offset}: {limit: number; offset: number},
  ) {
    return this.productsService.getProductFeedbackForProjectId(
      {
        clientSubdomain,
        ip,
        requestingUserId,
        requestingUserEmail,
      },
      {
        projectId,
        limit,
        offset,
      },
    );
  }
}
