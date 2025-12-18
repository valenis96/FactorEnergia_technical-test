import { Invoice, User } from "./models";

export const invoices: Invoice[] = [
  { id: 0, name: "Irene Galiano", date: '17/05/1995', amount: 400, address: 'via Cavour 15', pdf: 'Ula.pdf' },
  { id: 1, name: "Valentina Maronese", date: '23/10/1996', amount: 300, address: 'via Domenico Scarlatti 33', pdf: 'ValentinaMaroneseCV.pdf' },
  { id: 2, name: "Giorna Corazza", date: '01/07/1995', amount: 500, address: 'via Dante Alighieri 1', pdf: '790.pdf' },
  { id: 3, name: "Teresa Cosmai", date: '22/09/1996', amount: 500, address: 'via Gonin 7', pdf: 'slides-project management.pdf' }
]

export const users: User[] = [{
  name: "Valentina Maronese",
  email: 'val.maronese@gmail.com',
  date: '23/10/2025',
  address: 'via Domenico Scarlatti 33',
  password: '123'
}]