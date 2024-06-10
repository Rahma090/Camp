const meals = require('../../models/Owner/mealsPrice');

const newMeal = async (req, res) => {
    try {
        const {ownerId} = req.body
 const { breakfast, halfboard, fullboard} = req.body
 await meals.create({ 
    breakfast, 
    halfboard, 
    fullboard,
    ownerId
})
 return res.status(201).json("new meal added")
    }
    catch (error) {
        console.log(error)
        return res.status(500).json("meal not added")
    }
}

async function updateMealsPrice(req, res) {
    try {
      // Extract the meal type and new price from the request body
      const { mealType, newPrice } = req.body;
  
      // Validate that the meal type is one of breakfast, halfboard, or fullboard
      if (!['breakfast', 'halfboard', 'fullboard'].includes(mealType)) {
        return res.status(400).json({ message: 'Invalid meal type' });
      }
  
      // Find the specific row in the MealsPrice table based on the meal type
      let mealsPrice = await meals.findOne();
  
      // If the row exists, update the price for the specified meal type
      if (mealsPrice) {
        mealsPrice[mealType] = newPrice;
        await mealsPrice.save();
        return res.status(200).json({ message: 'Meals price updated successfully' });
      } else {
        // If the row doesn't exist, return a 404 error
        return res.status(404).json({ message: 'Meals price not found' });
      }
    } catch (error) {
      // If an error occurs during the process, return a 500 error
      console.error('Error updating meals price:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  async function deleteMealType(req, res) {
    try {
      // Extract the meal type from the request parameters
      const { mealType } = req.params;
  
      // Validate that the meal type is one of breakfast, halfboard, or fullboard
      if (!['breakfast', 'halfboard', 'fullboard'].includes(mealType)) {
        return res.status(400).json({ message: 'Invalid meal type' });
      }
  
      // Delete the row with the specified meal type from the MealsPrice table
      const deletedRows = await meals.destroy({ where: { [mealType]: { $ne: null } } });
  
      if (deletedRows > 0) {
        return res.status(200).json({ message: `Deleted ${mealType} price successfully` });
      } else {
        return res.status(404).json({ message: `No ${mealType} price found` });
      }
    } catch (error) {
      // If an error occurs during the process, return a 500 error
      console.error('Error deleting meal type price:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

module.exports = {
    newMeal, updateMealsPrice, deleteMealType
}
