import { Controller, Get, Post, Body, Req, Res, Param, Delete, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto'
import { ItemsService } from './items.service'
import { Item } from './interfaces/item.interface'

@Controller('jian')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {

    }
    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemsService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Item> {
        return this.itemsService.findOne(id)
    }

    @Post()
    async create(@Body() CreateItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.create(CreateItemDto)
    }

    @Delete(':id')
    delete(@Param('id') id) {
        return `Delete ${id}`
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
        return `Update ${id} - Name:${updateItemDto.name}`

    }

}
