const mongoose = require('mongoose');
const Entity = require('./models/entity.model');

mongoose
    .connect('mongodb://127.0.0.1:27017/pagination')
    .then(() => console.log('Connected to database'))
    .catch((e) => console.log(e));

const seedData = Array.from({ length: 15 }, (_, index) => ({
    title: `Entity ${index + 1}`,
    description: `This is a detailed description for entity ${index + 1}`,
    image: `image${index + 1}.jpg`,
    imageType: 'image/jpeg',
    category: index % 3 === 0 ? 'A' : index % 3 === 1 ? 'B' : 'C',
    active: index % 2 === 0,
    createdAt: new Date()
}));

async function seedDatabase() {
    try {
        await Entity.deleteMany({});
        await Entity.insertMany(seedData);
        console.log('Successfully added 15 entities');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}

seedDatabase();