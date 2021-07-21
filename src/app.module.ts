import { Module, ClassSerializerInterceptor } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './modules/users/user.module'

import config from '../ormconfig'
import { APP_INTERCEPTOR } from '@nestjs/core'

@Module({
  imports: [
    //ConfigModule.forRoot(),
    TypeOrmModule.forRoot(config),
    UserModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor
    }
  ],
})
export class AppModule {}
