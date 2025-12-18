export interface Invoice {
  id: number,
  name: string,
  date: string,
  amount: number,
  address: string,
  pdf: string
}

export interface User {
  name: string,
  date: string,
  email: string,
  address: string,
  password: string
}