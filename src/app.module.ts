import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GameModule } from './game/game.module';
import { GenreModule } from './genre/genre.module';
import { ReviewModule } from './review/review.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    GameModule,
    GenreModule,
    ReviewModule,
    CompanyModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
