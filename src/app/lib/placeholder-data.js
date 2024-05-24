const products = [
  { id: 1, pname: 'Handmade Vase', price: 45.00, category_id: 1, artisan_id: 1 },
  { id: 2, pname: 'Wooden Sculpture', price: 150.00, category_id: 2, artisan_id: 2 },
  { id: 3, pname: 'Metal Jewelry', price: 80.00, category_id: 3, artisan_id: 3 },
  { id: 4, pname: 'Textile Bag', price: 30.00, category_id: 4, artisan_id: 4 },
  { id: 5, pname: 'Paper Craft', price: 20.00, category_id: 5, artisan_id: 5 }
];


const categories = [
  { id: 1, categoryname: 'Pottery', category_url: '/categories/pottery' },
  { id: 2, categoryname: 'Sculpture', category_url: '/categories/sculpture' },
  { id: 3, categoryname: 'Metalwork', category_url: '/categories/metalwork' },
  { id: 4, categoryname: 'Textiles', category_url: '/categories/textiles' },
  { id: 5, categoryname: 'Paper', category_url: '/categories/paper' },
  { id: 6, categoryname: 'Jewelry', category_url: '/categories/jewelry' }
];

const categoryCrafts = [
  { id: 1, craftname: 'Ceramic Bowl', ccdescription: 'A beautiful handmade ceramic bowl.', ccprice: 35.00, ccurl: '/crafts/ceramic-bowl', category_id: 1 },
  { id: 2, craftname: 'Bronze Statue', ccdescription: 'A detailed bronze statue.', ccprice: 200.00, ccurl: '/crafts/bronze-statue', category_id: 2 },
  { id: 3, craftname: 'Silver Necklace', ccdescription: 'A delicate silver necklace.', ccprice: 90.00, ccurl: '/crafts/silver-necklace', category_id: 6 },
  { id: 4, craftname: 'Woven Scarf', ccdescription: 'A cozy woven scarf.', ccprice: 40.00, ccurl: '/crafts/woven-scarf', category_id: 4 },
  { id: 5, craftname: 'Origami Set', ccdescription: 'A set of beautiful origami.', ccprice: 25.00, ccurl: '/crafts/origami-set', category_id: 5 }
];

const artisans = [
  { id: 1, artisanfname: 'John', artisanlname: 'Doe', artisanemail: 'john.doe@example.com', artisanphone: '123-456-7890', artisaninfo: 'An experienced pottery artist.' },
  { id: 2, artisanfname: 'Jane', artisanlname: 'Smith', artisanemail: 'jane.smith@example.com', artisanphone: '098-765-4321', artisaninfo: 'A skilled sculptor with 10 years of experience.' },
  { id: 3, artisanfname: 'Emily', artisanlname: 'Jones', artisanemail: 'emily.jones@example.com', artisanphone: '456-789-1230', artisaninfo: 'A jeweler specializing in silver and gold.' },
  { id: 4, artisanfname: 'Michael', artisanlname: 'Brown', artisanemail: 'michael.brown@example.com', artisanphone: '789-123-4560', artisaninfo: 'Textile artist with a passion for natural fibers.' },
  { id: 5, artisanfname: 'Sarah', artisanlname: 'Davis', artisanemail: 'sarah.davis@example.com', artisanphone: '321-654-9870', artisaninfo: 'Paper craft artist creating unique designs.' }
];

module.exports = {
  products,
  categories,
  categoryCrafts,
  artisans
}; 
