import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { SkuQuantityType } from 'ish-core/models/product/product.model';

type DisplayType = 'tile' | 'row';

@Component({
  selector: 'ish-retail-set-parts',
  templateUrl: './retail-set-parts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RetailSetPartsComponent {
  @Input() parts: SkuQuantityType[];
  @Input() displayType?: DisplayType = 'row';
}
