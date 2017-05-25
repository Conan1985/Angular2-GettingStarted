import { Component } from '@angular/core';

@Component({
    selector: 'product-list',
    template: `
        <h1>{{hello}}</h1>
    `
})
export class ProductListComponent {
    hello = 'Here we show the product list!!!';
}
