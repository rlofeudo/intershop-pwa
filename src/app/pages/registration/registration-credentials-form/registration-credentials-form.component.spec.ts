import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MockComponent } from 'ng-mocks';

import { InputComponent } from 'ish-shared/forms/components/input/input.component';

import { RegistrationCredentialsFormComponent } from './registration-credentials-form.component';

describe('Registration Credentials Form Component', () => {
  let component: RegistrationCredentialsFormComponent;
  let fixture: ComponentFixture<RegistrationCredentialsFormComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockComponent(InputComponent), RegistrationCredentialsFormComponent],
      imports: [ReactiveFormsModule, TranslateModule.forRoot()],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationCredentialsFormComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;

    const parentForm = new FormGroup({});
    const credentialsForm = new FormGroup({
      login: new FormControl(''),
      loginConfirmation: new FormControl(''),
      password: new FormControl(''),
      passwordConfirmation: new FormControl(''),
      newsletter: new FormControl(''),
    });
    parentForm.addControl('credentials', credentialsForm);
    component.parentForm = parentForm;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
    expect(element).toBeTruthy();
    expect(() => fixture.detectChanges()).not.toThrow();
  });

  it('should throw an error if input parameter parentForm is not set', () => {
    component.parentForm = undefined;
    expect(() => fixture.detectChanges()).toThrow();
  });

  it('should display form input fields on creation', () => {
    fixture.detectChanges();
    expect(element.querySelector('ish-input[controlname=login]')).toBeTruthy();
    expect(element.querySelector('ish-input[controlname=loginConfirmation]')).toBeTruthy();
    expect(element.querySelector('ish-input[controlname=password]')).toBeTruthy();
    expect(element.querySelector('ish-input[controlname=passwordConfirmation]')).toBeTruthy();
  });
});
