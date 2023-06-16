const FoodItem = require('../model/Meals');

  

  // Multer upload instance
    
// Create a new food item
// Create a new food item
exports.createFoodItem =  async function (req, res) {
    try {
      const { name, ingredients, calories, category } = req.body;
      const image = req.file.filename; // Get the filename of the uploaded image
      const foodItem = await FoodItem.create({ name, ingredients, calories, category, image });
      res.status(200).json(foodItem);
    } catch (error) {
      console.error('Error creating food item:', error);
      res.status(500).json({ error: 'An error occurred while creating the food item' });
    }
  };
  

// Retrieve all food items
exports.getAllFoodItems = async function (req, res) {
  try {
    const foodItems = await FoodItem.findAll();
    console.log('Food items:', foodItems);
    res.status(200).json(foodItems);
  } catch (error) {
    console.error('Error retrieving food items:', error);
    res.status(500).json({ error: 'An error occurred while retrieving food items' });
  }
};

// Retrieve a specific food item by ID
exports.getFoodItemById = async function (req, res) {
  try {
    const { id } = req.params;
    const foodItem = await FoodItem.findByPk(id);
    if (foodItem) {
      console.log('Food item found:', foodItem);
      res.status(200).json(foodItem);
    } else {
      console.log('Food item not found');
      res.status(404).json({ error: 'Food item not found' });
    }
  } catch (error) {
    console.error('Error retrieving food item:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the food item' });
  }
};

// Update a food item
exports.updateFoodItem = async function (req, res) {
  try {
    const { id } = req.params;
    const { name, ingredients, calories, category, image } = req.body;
    const foodItem = await FoodItem.findByPk(id);
    if (foodItem) {
      foodItem.name = name;
      foodItem.ingredients = ingredients;
      foodItem.calories = calories;
      foodItem.category = category;
      foodItem.image = image;
      await foodItem.save();
      console.log('Food item updated:', foodItem);
      res.status(200).json(foodItem);
    } else {
      console.log('Food item not found');
      res.status(404).json({ error: 'Food item not found' });
    }
  } catch (error) {
    console.error('Error updating food item:', error);
    res.status(500).json({ error: 'An error occurred while updating the food item' });
  }
};

// Delete a food item
exports.deleteFoodItem = async function (req, res) {
  try {
    const { id } = req.params;
    const foodItem = await FoodItem.findByPk(id);
    if (foodItem) {
      await foodItem.destroy();
      console.log('Food item deleted');
      res.status(204).end();
    } else {
      console.log('Food item not found');
      res.status(404).json({ error: 'Food item not found' });
    }
  } catch (error) {
    console.error('Error deleting food item:', error);
    res.status(500).json({ error: 'An error occurred while deleting the food item' });
  }
};


