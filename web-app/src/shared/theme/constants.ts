import { ThemeEnum } from '@/core/domain/value-objects/Theme';

// WHEN ADDING NEW THEME - DO NOT FORGET TO ADD VARS TO THE globals.css
export const SUPPORTED_THEMES: ThemeEnum[] = [ThemeEnum.dark, ThemeEnum.light];
export const FALLBACK_THEME: ThemeEnum = ThemeEnum.dark;
