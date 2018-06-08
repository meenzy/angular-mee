import { Component } from "@angular/core";
import { Product } from "../models/product";

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html'
})
export class ProductComponent{
    pageTitle : string = 'Product List';
    filterBy : string;
    products : Product[] = [
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
    
    filteredProducts : Product[]  = this.products;

    filterList() : void {
        console.log('filterBy :', this.filterBy);
        this.filteredProducts = this.products.filter((product) => {
            product.name.indexOf(this.filterBy) > -1;
        });
    }
}