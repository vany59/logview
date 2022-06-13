import ecsFormat from '@elastic/ecs-winston-format';
import { Injectable } from '@nestjs/common';
import { WinstonModuleOptionsFactory } from 'nest-winston';
import winston, { LoggerOptions } from 'winston';

@Injectable()
export class LoggerService implements WinstonModuleOptionsFactory {
  createWinstonModuleOptions(): LoggerOptions {
    return {
      format: ecsFormat({ apmIntegration: false }),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          //path to log file
          filename: 'logs/log.json',
        }),
      ],
    };
  }
}
