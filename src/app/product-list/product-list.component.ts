import { Component } from "@angular/core";

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})
export class ProductComponent{
    pageTitle : string = 'Product List';
    products : any = [
        {
            "id": 1,
            "name": "Basil",
            "type": "Leaves",
            "price": 100
        },
        {
            "id": 2,
            "name": "Basil-Dry",
            "type": "Leaves",
            "price": 100
        },
        {
            "id": 3,
            "name": "Aloevera",
            "type": "Stems",
            "price": 150
        }
    ];
}