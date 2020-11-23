import { createAction } from '@ngrx/store';

import { Credentials } from 'ish-core/models/credentials/credentials.model';
import { Customer, CustomerRegistrationType } from 'ish-core/models/customer/customer.model';
import { PasswordReminder } from 'ish-core/models/password-reminder/password-reminder.model';
import { User } from 'ish-core/models/user/user.model';
import { payload } from 'ish-core/utils/ngrx-creators';

export const loginUser = createAction('[User] Login User', payload<{ credentials: Credentials }>());

export const loadCompanyUser = createAction('[User Internal] Load Company User');

export const logoutUser = createAction('[User] Logout User');

export const createUser = createAction('[User] Create User', payload<CustomerRegistrationType>());

export const updateUser = createAction('[User] Update User', payload<{ user: User; successMessage?: string }>());

export const updateUserPassword = createAction(
  '[User] Update User Password',
  payload<{ password: string; currentPassword: string; successMessage?: string }>()
);

export const updateCustomer = createAction(
  '[User] Update Customer',
  payload<{ customer: Customer; successMessage?: string }>()
);

export const userErrorReset = createAction('[User Internal] Reset User Error');

export const loadUserByAPIToken = createAction('[User] Load User by API Token');

export const setPGID = createAction('[User Internal] Set PGID', payload<{ pgid: string }>());

export const loadUserPaymentMethods = createAction('[User] Load User Payment Methods');

export const deleteUserPaymentInstrument = createAction(
  '[User] Delete User Instrument Payment ',
  payload<{ id: string }>()
);

export const requestPasswordReminder = createAction(
  '[Password Reminder] Request Password Reminder',
  payload<{ data: PasswordReminder }>()
);

export const resetPasswordReminder = createAction('[Password Reminder Internal] Reset Password Reminder Data');

export const updateUserPasswordByPasswordReminder = createAction(
  '[Password Reminder] Update User Password',
  payload<{ password: string; userID: string; secureCode: string }>()
);
