import { Document } from 'mongoose';
export interface Item {
    id?: string;
    name: string;
    description?: string;
    qty: number
}
export type ItemDocument = Item & Document;