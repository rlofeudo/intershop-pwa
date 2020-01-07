import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { NgbModalModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { MockComponent } from 'ng-mocks';
import { spy, verify } from 'ts-mockito';

import { CheckboxComponent } from 'ish-shared/forms/components/checkbox/checkbox.component';
import { InputComponent } from 'ish-shared/forms/components/input/input.component';

import { WishlistPreferencesDialogComponent } from './wishlist-preferences-dialog.component';

describe('Wishlist Preferences Dialog Component', () => {
  let component: WishlistPreferencesDialogComponent;
  let fixture: ComponentFixture<WishlistPreferencesDialogComponent>;
  let element: HTMLElement;

  const wishlist = {
    title: 'testing wishlist',
    type: 'WishList',
    id: '.SKsEQAE4FIAAAFuNiUBWx0d',
    itemsCount: 0,
    preferred: true,
    public: false,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MockComponent(CheckboxComponent),
        MockComponent(FaIconComponent),
        MockComponent(InputComponent),
        WishlistPreferencesDialogComponent,
      ],
      imports: [NgbModalModule, NgbPopoverModule, ReactiveFormsModule, TranslateModule.forRoot()],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistPreferencesDialogComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
    expect(element).toBeTruthy();
    expect(() => fixture.detectChanges()).not.toThrow();
  });

  it('should emit new wishlist data when submit form was called and the form was valid', done => {
    fixture.detectChanges();
    component.ngOnChanges({});
    component.wishListForm.setValue({
      title: 'test wishlist',
      preferred: true,
    });

    component.submit.subscribe(emit => {
      expect(emit).toEqual({
        id: 'test wishlist',
        title: 'test wishlist',
        preferred: true,
        public: false,
      });
      done();
    });

    component.submitWishlistForm();
  });

  it('should not emit new wishlist data when submit form was called and the form was invalid', () => {
    component.ngOnChanges({
      wishlist: {
        currentValue: wishlist,
        previousValue: undefined,
        firstChange: undefined,
        isFirstChange: undefined,
      },
    });
    fixture.detectChanges();
    const emitter = spy(component.submit);
    component.submitWishlistForm();

    verify(emitter.emit()).never();
  });

  it('should fill form with wishlist data if formContent is passed', () => {
    component.ngOnChanges({
      wishlist: {
        currentValue: wishlist,
        previousValue: undefined,
        firstChange: undefined,
        isFirstChange: undefined,
      },
    });
    fixture.detectChanges();

    expect(component.wishListForm.value.title).toEqual(wishlist.title);
    expect(component.wishListForm.value.preferred).toEqual(wishlist.preferred);
  });
});
