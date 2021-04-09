import { Injectable } from '@nestjs/common';
import { Item, ItemDocument } from './interfaces/item.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<ItemDocument>) { }
    async findAll(): Promise<Item[]> {
        return await this.itemModel.find()
    }

    async findOne(id: string): Promise<Item> {
        return await this.itemModel.findOne({ _id: id })
    }

    async create(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item);
        return await newItem.save();
    }

}