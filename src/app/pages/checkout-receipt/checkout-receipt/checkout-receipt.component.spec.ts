import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { MockComponent } from 'ng-mocks';

import { User } from 'ish-core/models/user/user.model';
import { BasketMockData } from 'ish-core/utils/dev/basket-mock-data';
import { ContentIncludeComponent } from 'ish-shared/cms/components/content-include/content-include.component';
import { AddressComponent } from 'ish-shared/components/address/address/address.component';
import { BasketCostSummaryComponent } from 'ish-shared/components/basket/basket-cost-summary/basket-cost-summary.component';
import { InfoBoxComponent } from 'ish-shared/components/common/info-box/info-box.component';
import { ModalDialogLinkComponent } from 'ish-shared/components/common/modal-dialog-link/modal-dialog-link.component';
import { LineItemListComponent } from 'ish-shared/components/line-item/line-item-list/line-item-list.component';

import { CheckoutReceiptComponent } from './checkout-receipt.component';

describe('Checkout Receipt Component', () => {
  let component: CheckoutReceiptComponent;
  let fixture: ComponentFixture<CheckoutReceiptComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CheckoutReceiptComponent,
        MockComponent(AddressComponent),
        MockComponent(BasketCostSummaryComponent),
        MockComponent(ContentIncludeComponent),
        MockComponent(InfoBoxComponent),
        MockComponent(LineItemListComponent),
        MockComponent(ModalDialogLinkComponent),
      ],
      imports: [RouterTestingModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutReceiptComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    component.order = BasketMockData.getOrder();
    component.user = { email: 'test@test.com' } as User;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
    expect(element).toBeTruthy();
    expect(() => fixture.detectChanges()).not.toThrow();
  });

  it('should display the document number after creation', () => {
    fixture.detectChanges();
    expect(element.querySelector('[data-testing-id="order-document-number"]').innerHTML.trim()).toContain('12345678');
  });

  it('should display the home link after creation', () => {
    fixture.detectChanges();
    expect(element.querySelector('[data-testing-id="home-link"]')).toBeTruthy();
  });

  it('should display the my account link after creation', () => {
    fixture.detectChanges();
    expect(element.querySelector('[data-testing-id="myaccount-link"]')).toBeTruthy();
  });
});
