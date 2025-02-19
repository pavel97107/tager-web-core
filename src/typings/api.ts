import { QueryParams } from './common';

export type BodyParam = object | FormData;

export type JsonParseResult =
  | { [key: string]: any }
  | Array<any>
  | number
  | boolean
  | null;

export type ParsedResponseBody = JsonParseResult | string | null;
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export type RequestOptions = {
  path?: string;
  body?: BodyParam;
  params?: QueryParams;
  absoluteUrl?: string;
  fetchOptions?: RequestInit;
  method: HttpMethod;
};

export type HttpRequestFunction = <T = ParsedResponseBody>(
  options: Omit<RequestOptions, 'method'>
) => Promise<T>;

export type ValidationError = { code: string; message: string };
