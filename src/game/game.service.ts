import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateGamesDto } from './dto/create-game.dto';
import { CreateGameDto } from './dto/create-game.dto';
import { Game } from '@prisma/client';

@Injectable()
export class GameService {
  constructor(private prismaService: PrismaService) {}

  async createMany(createGamesDto: CreateGamesDto) {
    await this.prismaService.game.createMany({
      data: createGamesDto.games,
      skipDuplicates: true,
    });
  }

  async create(createGameDto: CreateGameDto) {
    const createdGameawait = this.prismaService.game.create({
      data: createGameDto,
    });

    let genreExists = false;
    let companieExists = false;
    const genreQuantity = createGameDto.genreId.length;
    const companieQuantity = createGameDto.companieId.length;

    if (genreQuantity === 0 || genreQuantity !== undefined) {
      genreExists = true;
    }

    if (companieQuantity === 0 || companieQuantity !== undefined) {
      companieExists = false;
    }
  }

  async findMany(): Promise<Game[]> {
    const games = await this.prismaService.game.findMany();
    return games;
  }
}
