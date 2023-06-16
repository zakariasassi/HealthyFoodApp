const Category = require('../model/Categorys')






// Create a new category
exports.createCategory = async function (req , res) {
    const {name} = req.body
  try {
    const category = await Category.create({ name });
    console.log('Category created:', category);
    return category;
  } catch (error) {
    console.error('Error creating category:', error);
    throw error;
  }
};

// Retrieve all categories
exports.getAllCategories = async function (req , res) {
  try {
    const categories = await Category.findAll();
     res.status(200).json(categories)
  } catch (error) {
    console.error('Error retrieving categories:', error);
    throw error;
  }
};

// Retrieve a specific category by ID
exports.getCategoryById = async function (req , res) {
  try {
    const category = await Category.findByPk(id);
    if (category) {
      console.log('Category found:', category);
      return category;
    } else {
      console.log('Category not found');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving category:', error);
    throw error;
  }
};

// Update a category
exports.updateCategory = async function (req , res) {
  try {
    const category = await Category.findByPk(id);
    if (category) {
      category.name = newName;
      await category.save();
      console.log('Category updated:', category);
      return category;
    } else {
      console.log('Category not found');
      return null;
    }
  } catch (error) {
    console.error('Error updating category:', error);
    throw error;
  }
};

// Delete a category
exports.deleteCategory = async function (req , res) {
  try {
    const category = await Category.findByPk(id);
    if (category) {
      await category.destroy();
      console.log('Category deleted');
    } else {
      console.log('Category not found');
    }
  } catch (error) {
    console.error('Error deleting category:', error);
    throw error;
  }
};


