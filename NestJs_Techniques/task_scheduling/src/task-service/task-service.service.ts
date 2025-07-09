
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

//   @Cron('* * * * * *')
//   @Cron(CronExpression.EVERY_5_SECONDS)
  @Cron(new Date(Date.now() + 10 * 1000))

  handleCron() {
    this.logger.debug('Called when the current second is 45');
  }
}
