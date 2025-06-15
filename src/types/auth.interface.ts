import type { UserInterface } from '@/types/user.interface.ts';

export interface RequestRegisterInterface {
  email: string,
  password: string,
  username: string,
}

export interface ResponseRegisterInterface {
  data: UserInterface,
  message: string,
  status: string,
}

export interface RequestLoginInterface {
  password: string,
  username: string,
}

export interface ResponseLoginInterface {
  data: {
    token: string,
    user: UserInterface,
  },
  message: string,
  status: string,
}
