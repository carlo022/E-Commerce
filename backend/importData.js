const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv').config();

const Product = require('./models/Product');
const User = require('./models/User');

mongoose.connect(process.env.MONGODB_URI)
.then(async () => {
  console.log('Connected to MongoDB');

  // Read db.json
  const rawData = fs.readFileSync('./data/db.json', 'utf8');
  const data = JSON.parse(rawData);

  // Import products
  if (data.products) {
    await Product.deleteMany({});
    await Product.insertMany(data.products);
    console.log(`✅ Imported ${data.products.length} products`);
  }

  // Import users
  if (data.users) {
    await User.deleteMany({});
    await User.insertMany(data.users);
    console.log(`✅ Imported ${data.users.length} users`);
  }

  console.log('✅ All data imported successfully!');
  process.exit(0);
})
.catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});