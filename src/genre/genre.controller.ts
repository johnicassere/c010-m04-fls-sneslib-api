import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenresDto } from './dto/create-genre.dto';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('genre')
@Controller('genre')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Post()
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Criar vários gêneros',
  })
  @ApiBearerAuth()
  async createMany(@Body() createGenresDto: CreateGenresDto) {
    return this.genreService.createMany(createGenresDto);
  }
}
