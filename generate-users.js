import { faker } from '@faker-js/faker';
import { generateJsonData } from './utils/generate.js';

const count = 10;
const users = [];

for (let i = 0; i < count; i++) {
    const user = {
        id: faker.string.uuid(),
        avatar: faker.image.avatarLegacy(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        birthDate: faker.date.birthdate({ min: 18, max: 65, mode: 'age' })
        // Add more properties as needed
    };
    users.push(user);
}

generateJsonData(users, 'users');
