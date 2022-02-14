import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCompaniesDto } from './dto/create-company.dto';

@Injectable()
export class CompanyService {
  constructor(private prismaService: PrismaService) {}

  async createMany(createCompaniesDto: CreateCompaniesDto) {
    await this.prismaService.company.createMany({
      data: createCompaniesDto.companies,
      skipDuplicates: true,
    });
  }
}
