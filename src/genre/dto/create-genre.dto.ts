import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGenreDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;
}

export class CreateGenresDto {
  @IsNotEmpty()
  @ApiProperty()
  genres: CreateGenreDto[];
}
