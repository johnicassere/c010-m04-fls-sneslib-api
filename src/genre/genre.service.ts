import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateGenresDto } from './dto/create-genre.dto';

@Injectable()
export class GenreService {
  constructor(private prismaService: PrismaService) {}

  async createMany(createGenresDto: CreateGenresDto) {
    await this.prismaService.genre.createMany({
      data: createGenresDto.genres,
      skipDuplicates: true,
    });
  }
}
