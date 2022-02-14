import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompaniesDto } from './dto/create-company.dto';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('company')
@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Criar vários gêneros',
  })
  @ApiBearerAuth()
  async createMany(@Body() createCompaniesDto: CreateCompaniesDto) {
    return this.companyService.createMany(createCompaniesDto);
  }
}
