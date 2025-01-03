import { Document, Model } from 'mongoose';

export interface TDEMO extends Document {
  title: string;
  description: string;
  password: string;
  sliceTitle?: string; //virtual property
  combine(): string; //methods of instance
  matchPassword(): Promise<boolean>; //methods of instance
}

export interface TDEMOMODEL extends Model<TDEMO> {
  findByTitle(title: string): Promise<TDEMO | null>; //statics method
}
