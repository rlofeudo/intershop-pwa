import { createAction } from '@ngrx/store';

import { Customer, CustomerUserType } from 'ish-core/models/customer/customer.model';
import { PaymentMethod } from 'ish-core/models/payment-method/payment-method.model';
import { User } from 'ish-core/models/user/user.model';
import { httpError, payload } from 'ish-core/utils/ngrx-creators';

export const loginUserFail = createAction('[User API] Login User Failed', httpError());

export const loginUserSuccess = createAction('[User API] Login User Success', payload<CustomerUserType>());

export const loadCompanyUserFail = createAction('[User API] Load Company User Fail', httpError());

export const loadCompanyUserSuccess = createAction('[User API] Load Company User Success', payload<{ user: User }>());

export const createUserFail = createAction('[User API] Create User Failed', httpError());

export const updateUserSuccess = createAction(
  '[User API] Update User Succeeded',
  payload<{ user: User; successMessage?: string }>()
);

export const updateUserFail = createAction('[User API] Update User Failed', httpError());

export const updateUserPasswordSuccess = createAction(
  '[User API] Update User Password Succeeded',
  payload<{ successMessage?: string }>()
);

export const updateUserPasswordFail = createAction('[User API] Update User Password Failed', httpError());

export const updateCustomerSuccess = createAction(
  '[User API] Update Customer Succeeded',
  payload<{ customer: Customer; successMessage?: string }>()
);

export const updateCustomerFail = createAction('[User API] Update Customer Failed', httpError());

export const loadUserPaymentMethodsSuccess = createAction(
  '[User API] Load User Payment Methods Success',
  payload<{ paymentMethods: PaymentMethod[] }>()
);

export const loadUserPaymentMethodsFail = createAction('[User API] Load User Payment Methods Fail', httpError());

export const deleteUserPaymentInstrumentSuccess = createAction('[User API] Delete User Payment Instrument Success');

export const deleteUserPaymentInstrumentFail = createAction(
  '[User API] Delete User Payment Instrument Fail',
  httpError()
);

export const requestPasswordReminderSuccess = createAction('[Password Reminder API] Request Password Reminder Success');

export const requestPasswordReminderFail = createAction(
  '[Password Reminder API] Request Password Reminder Fail',
  httpError()
);

export const updateUserPasswordByPasswordReminderSuccess = createAction(
  '[Password Reminder] Update User Password Succeeded'
);

export const updateUserPasswordByPasswordReminderFail = createAction(
  '[Password Reminder] Update User Password Failed',
  httpError()
);
