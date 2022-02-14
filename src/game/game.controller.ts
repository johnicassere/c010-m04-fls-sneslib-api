import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
import { GameService } from './game.service';
import { CreateGamesDto } from './dto/create-game.dto';
import { ApiOperation, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Game } from '@prisma/client';

@ApiTags('game')
@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post()
  @UseGuards(AuthGuard())
  @ApiOperation({
    summary: 'Criar vários jogos',
  })
  @ApiBearerAuth()
  async createMany(@Body() createGamesDto: CreateGamesDto) {
    return this.gameService.createMany(createGamesDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listar todos os jogos cadastrados',
  })
  async findMany(): Promise<Game[]> {
    return this.gameService.findMany();
  }
}
