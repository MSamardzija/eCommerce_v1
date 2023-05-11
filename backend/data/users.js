import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Marko Samardzija',
    email: 'marko@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Bro',
    email: 'bro@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
