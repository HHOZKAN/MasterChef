import bcrypt from 'bcryptjs';

const users = [
    {
        id: 1,
        name: "Admin",
        email: "admin@example.com",
        password: bcrypt.hashSync('admin', 10),
        idAdmin: true
    },
    {
        id: 2,
        name: "User",
        email: "user@example.com",
        password: bcrypt.hashSync('user', 10),
    },
];

export default users;