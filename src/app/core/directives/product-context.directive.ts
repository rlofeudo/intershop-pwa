import { Directive, Input, OnChanges, OnInit, Optional, Output, SimpleChanges, SkipSelf } from '@angular/core';

import { ProductContextFacade } from 'ish-core/facades/product-context.facade';
import { ProductCompletenessLevel } from 'ish-core/models/product/product.model';

@Directive({
  selector: '[ishProductContext]',
  providers: [ProductContextFacade],
})
export class ProductContextDirective implements OnInit, OnChanges {
  @Input() sku: string;
  @Input() quantity: number;
  @Input() completeness: 'List' | 'Detail' = 'List';
  @Input() propagateIndex: number;
  @Input() propagateActive = true;

  @Output() skuChange = this.context.select('sku');
  @Output() quantityChange = this.context.select('quantity');

  constructor(
    @SkipSelf() @Optional() private parentContext: ProductContextFacade,
    private context: ProductContextFacade
  ) {
    this.context.hold(this.context.$, () => this.propagate());
  }

  private propagate() {
    if (this.propagateIndex !== undefined) {
      if (!this.parentContext) {
        throw new Error('cannot propagate without parent context');
      }
      this.parentContext.propagate(this.propagateIndex, this.propagateActive ? this.context.get() : undefined);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes?.propagateActive) {
      this.propagate();
    }
  }

  ngOnInit() {
    if (this.quantity !== undefined) {
      this.context.set('quantity', () => this.quantity);
    }
    this.context.set('requiredCompletenessLevel', () =>
      this.completeness === 'List' ? ProductCompletenessLevel.List : ProductCompletenessLevel.Detail
    );
    this.context.set('sku', () => this.sku);
  }
}
