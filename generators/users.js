import { faker } from '@faker-js/faker';
import { createJsonFile } from '../utils/create-json-file.js';

const count = 10;
const users = [];

for (let i = 0; i < count; i++) {
    const user = {
        id: faker.string.uuid(),
        avatar: faker.image.avatarLegacy(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        birthDate: faker.date.birthdate({ min: 18, max: 65, mode: 'age' }),
        description: faker.lorem.paragraph(),
        address: {
            street: faker.location.streetAddress({ useFullAddress: true }),
            city: faker.location.city(),
            country: faker.location.country(),
        },
        contact: {
            email: faker.internet.email(),
            phone: faker.phone.number('+421 91# ### ###'),
        }
    };
    users.push(user);
}

createJsonFile(users, 'users');
