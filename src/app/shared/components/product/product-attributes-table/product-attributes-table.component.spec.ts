import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { AttributeToStringPipe } from 'ish-core/models/attribute/attribute.pipe';
import { Product } from 'ish-core/models/product/product.model';

import { ProductAttributesTableComponent } from './product-attributes-table.component';

describe('Product Attributes Table Component', () => {
  let component: ProductAttributesTableComponent;
  let fixture: ComponentFixture<ProductAttributesTableComponent>;
  let element: HTMLElement;
  let product: Product;
  beforeEach(async () => {
    product = { sku: 'sku' } as Product;
    product.attributes = [
      { name: 'A', type: 'String', value: 'A' },
      { name: 'B', type: 'String', value: 'B' },
    ];
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, TranslateModule.forRoot()],
      declarations: [AttributeToStringPipe, ProductAttributesTableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAttributesTableComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    component.product = product;

    const translate = TestBed.inject(TranslateService);
    translate.setDefaultLang('en');
    translate.use('en');
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
    expect(element).toBeTruthy();
    expect(() => fixture.detectChanges()).not.toThrow();
  });

  it('should render product attributes table when available', () => {
    fixture.detectChanges();
    expect(element.getElementsByClassName('product-attributes-table-row')).toHaveLength(2);
    expect(element.getElementsByClassName('product-attributes-table-type')).toHaveLength(2);
    expect(element.getElementsByClassName('product-attributes-table-value')).toHaveLength(2);
  });

  it('should render product attributes name and value in the table when available', () => {
    product.attributes = [{ name: 'A', type: 'String', value: 'A' }];
    fixture.detectChanges();
    expect(element.querySelector('.product-attributes-table-type').textContent).toEqual('A:');
    expect(element.querySelector('.product-attributes-table-value').textContent).toEqual('A');
  });

  it('should render product attributes name and multiple value in the table when available', () => {
    product.attributes = [{ name: 'A', type: 'MultipleString', value: ['hallo', 'welt'] }];
    component.multipleValuesSeparator = ':::';
    fixture.detectChanges();
    expect(element.querySelector('.product-attributes-table-type').textContent).toEqual('A:');
    expect(element.querySelector('.product-attributes-table-value').textContent).toEqual('hallo:::welt');
  });
});
