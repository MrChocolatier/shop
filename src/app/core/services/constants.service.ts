import { InjectionToken } from '@angular/core';

export const APP_INFO = new InjectionToken<{App: string, Ver: string}>('appInfo');

export const appInfo = {
  App: 'Book Store',
  Ver: '1.0'
};
