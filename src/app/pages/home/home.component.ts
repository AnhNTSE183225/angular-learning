import {Component} from '@angular/core';
import {ProductInfoService} from '../../services/product-info-service/product-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  nameInput: string = '';
  genderInput: string = '';

  constructor(
    private productInfoService: ProductInfoService
  ) {
  }

  add(): void {
    if (this.nameInput.trim().length > 0 && this.genderInput.trim().length > 0) {
      this.productInfoService.insert(
        {
          name: this.nameInput.trim(),
          gender: this.genderInput.trim()
        }
      );
    } else {
      console.log("Both fields must be not blank!");
    }
  }
}
