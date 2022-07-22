export interface User {
  username: string,
  fullName: string,
  roles: [
    "user",
    "customer",
    "admin"
  ]
}
