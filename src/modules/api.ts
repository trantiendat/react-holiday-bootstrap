import axios, { AxiosInstance } from 'axios';

interface IConstructorParams {
  baseURL: string;
}

interface IApiParams {
  url: string;
}

export class Api {
  axiosInstance: AxiosInstance;

  constructor({ baseURL }: IConstructorParams) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  async get<T>({ url }: IApiParams) {
    try {
      const response = await this.axiosInstance.get<T>(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      console.error(error);
    }
  }
}
