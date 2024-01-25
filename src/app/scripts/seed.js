const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const fs = require('fs/promises');
const path = require('path');

async function seedDatabase() {
  try {
    // Remove existing data
    await prisma.dish.deleteMany({});

    // Read data from JSON file
    const filePath = path.resolve(__dirname, '../lib/dishes.json');
    const jsonData = await fs.readFile(filePath, 'utf-8');
    const dishesData = JSON.parse(jsonData);

    await prisma.dish.createMany({
      data: dishesData,
    });

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    // Disconnect from the database
    await prisma.$disconnect();
  }
}

// Run the seeding script
seedDatabase();