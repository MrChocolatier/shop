import { InjectionToken } from '@angular/core';

export const GENERATOR = new InjectionToken<string>('generator');

export function generatorFactory(length: number) {
  return (): string => {
    let result = '';
    const dict = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
      result = result + dict.charAt(Math.floor(Math.random() * dict.length));
    }

    return result;
  };
}
