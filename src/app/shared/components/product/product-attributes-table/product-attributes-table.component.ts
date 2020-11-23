import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Product } from 'ish-core/models/product/product.model';

@Component({
  selector: 'ish-product-attributes-table',
  templateUrl: './product-attributes-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('blind', [
      transition('* => *', [
        query('.product-attributes-table-row', [
          style({ opacity: 0, transform: 'translateY(-100%)' }),
          stagger('400ms', [animate('400ms', style({ opacity: 1, transform: 'translateY(0)' }))]),
        ]),
      ]),
    ]),
  ],
})
export class ProductAttributesTableComponent {
  @Input() title: string;
  @Input() product: Product;
  @Input() multipleValuesSeparator = ', ';
}
