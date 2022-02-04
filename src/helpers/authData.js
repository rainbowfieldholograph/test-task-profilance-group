import { roles } from './roles'

export const authData = {
  users: [
    { login: 'user1', password: 'user12345', role: roles.user },
    { login: 'user2', password: 'user222', role: roles.user },
    { login: 'benhoward', password: '201612', role: roles.user },
    { login: 'admin1', password: 'admin322', role: roles.admin },
    { login: 'hello', password: 'world', role: roles.admin },
  ],
}
