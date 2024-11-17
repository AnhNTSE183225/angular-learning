import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductInfoService {

  list: Array<{ name: string, gender: string }> = [];

  constructor() {
    this.init()
  }

  init(): void {
    this.insert({
      name: 'Alibou',
      gender: 'Male'
    })
    this.insert({
      name: 'Caitlyn',
      gender: 'Female'
    })
    this.insert({
      name: 'Viktor',
      gender: 'Male'
    })
  }

  insert(item: { name: string, gender: string }): void {
    this.list.push(item);
  }

  getAll() {
    return this.list;
  }

  delete(index: number) {
    this.list.splice(index, 1);
  }
}
