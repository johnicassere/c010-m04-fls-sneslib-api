import { IsString, IsNotEmpty, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  logo: string;
}

export class CreateCompaniesDto {
  @IsNotEmpty()
  @ApiProperty()
  companies: CreateCompanyDto[];
}
