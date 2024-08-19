import { z } from 'zod';
import { Language } from '../common/Language';

export type GamePackSchema = {};

export interface GamePack {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  language: Language;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}
