import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ForeignService {

  constructor(
    @InjectModel('Foreign') private readonly foreignModel
  ) { }

  async foreignInfo() {
    return await this.foreignModel.find().exec();
  }
  
}