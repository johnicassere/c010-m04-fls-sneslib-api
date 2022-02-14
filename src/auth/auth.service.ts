import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { LoginDto, LoginResponseDto } from './dto/login.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async login(data: LoginDto): Promise<LoginResponseDto> {
    const { email, password } = data;
    const userExists = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!userExists) {
      throw new NotFoundException('Usuário não encontrado');
    }

    const isHashValid = await bcrypt.compare(password, userExists.password);

    if (!isHashValid) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    delete userExists.password;

    return {
      token: this.jwtService.sign({ email }),
      user: userExists,
    };
  }
}
