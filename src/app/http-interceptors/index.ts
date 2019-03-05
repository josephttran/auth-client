import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ConfigInterceptor } from './config.interceptor';
import { ErrorInterceptor } from './error.interceptor';
import { ResLoggerInterceptor } from './res-logger.intercepter';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ConfigInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ResLoggerInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
];
