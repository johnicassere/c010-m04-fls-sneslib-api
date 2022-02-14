import {
  IsString,
  IsNotEmpty,
  IsUrl,
  IsDateString,
  IsOptional,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  title: string;

  @IsDateString()
  @IsNotEmpty()
  @ApiProperty()
  release: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  summary: string;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  imageUrl: string;

  @IsOptional()
  @ApiProperty()
  companieId: string[];

  @IsOptional()
  @ApiProperty()
  genreId: string[];
}

export class CreateGamesDto {
  @IsNotEmpty()
  @ApiProperty()
  games: CreateGameDto[];
}
