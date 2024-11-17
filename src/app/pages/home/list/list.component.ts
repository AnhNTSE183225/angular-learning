import {Component} from '@angular/core';
import {ProductInfoService} from '../../../services/product-info-service/product-info.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  list: Array<{ name: string, gender: string }> = [];

  constructor(
    private productInfoService: ProductInfoService
  ) {
    this.list = productInfoService.getAll();
  }

  delete(index: number): void {
    this.productInfoService.delete(index);
  }
}
