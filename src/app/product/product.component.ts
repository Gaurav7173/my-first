import { Component } from "@angular/core";


@Component({
    selector: 'my-product',
    templateUrl: './product.component.html',
    standalone: true,
})
export class ProductComponent {
    colspan:number=2;
    productname: string="Laptop";
    price: number=10090;
    quantity: number=5905;

}