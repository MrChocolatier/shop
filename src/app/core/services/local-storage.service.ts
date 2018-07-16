export class LocalStorageService {

  constructor() { }

  setItem(key: string, data: any) {
    let dataToSet = data;

    if (typeof data !== 'string') {
      dataToSet = JSON.stringify(data);
    }

    localStorage.setItem(key, dataToSet);
  }

  getItem(key: string): string {
    return localStorage.getItem(key);
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
