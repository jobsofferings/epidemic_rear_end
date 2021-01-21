import { Injectable } from '@nestjs/common';
import { InjectSchedule, Schedule } from 'nest-schedule';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectSchedule() private readonly schedule: Schedule,
  ) {
  }

  createJob() {
    this.schedule.scheduleIntervalJob('my-job1', 3000, () => {
      console.log('executing interval job');
      return false;
    });
  }

  cancelJob() {
    this.schedule.cancelJob('my-job');
  }
}