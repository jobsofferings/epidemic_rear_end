import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Epidemic } from 'src/interfaces/epidemic.interface';

@Injectable()
export class EpidemicService {

  constructor(
    @InjectModel('Epidemic') private readonly epidemicModel
  ) { }

  async epidemicInfo(json?: Epidemic, fields?: String) {
    return await this.epidemicModel.find(json, fields).exec();
  }

  async add(json: Epidemic) {
    const model = new this.epidemicModel(json);
    return await model.save();
  }

  async update(json1: Epidemic, json2: Epidemic) {
    return await this.epidemicModel.updateOne(json1, json2);
  }

  async delete(json: Epidemic) {
    return await this.epidemicModel.deleteOne(json);
  }

}