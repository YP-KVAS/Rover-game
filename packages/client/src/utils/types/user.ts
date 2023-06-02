import { FormInputNames } from './forms'
import { UserRolesEnum } from '../const-variables/user-roles'

export interface UserSignIn extends Record<string, unknown> {
  [FormInputNames.LOGIN]: string
  [FormInputNames.PASSWORD]: string
}

export interface UserSignUp extends UserSignIn {
  [FormInputNames.FIRST_NAME]: string
  [FormInputNames.SECOND_NAME]: string
  [FormInputNames.EMAIL]: string
  [FormInputNames.PHONE]: string
}

export interface UserSettings extends Omit<UserSignUp, 'password'> {
  [FormInputNames.DISPLAY_NAME]: string
}

export interface User extends UserSettings {
  id: number
  [FormInputNames.AVATAR]: string | null
}

export interface UserWithRole extends User {
  role: UserRolesEnum
}

export interface IUserPassword extends Record<string, unknown> {
  [FormInputNames.OLD_PASSWORD]: string
  [FormInputNames.NEW_PASSWORD]: string
}

export interface LeaderboardUser {
  [FormInputNames.AVATAR]: string | null
  [FormInputNames.DISPLAY_NAME]: string | null
  score: number | null
}
