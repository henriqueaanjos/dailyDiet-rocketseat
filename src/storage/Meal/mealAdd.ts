import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION } from "@storage/storageConfig";

import { MealDTO } from "./MealDTO";

import { mealGetAll } from "./mealGetAll";

export async function mealAdd(newMeal: MealDTO){
    try {
        const storagedMeals = await mealGetAll();

        const mealAlreadyExists = storagedMeals.find(meal => meal.id === newMeal.id);

        if(mealAlreadyExists){
            mealAlreadyExists.name = newMeal.name;
            mealAlreadyExists.description = newMeal.description;
            mealAlreadyExists.date = newMeal.date;
            mealAlreadyExists.time = newMeal.time;
            mealAlreadyExists.isOnDiet = newMeal.isOnDiet;
            const storage = JSON.stringify([...storagedMeals]);
            await AsyncStorage.setItem(MEAL_COLLECTION, storage);
        }else{
            const storage = JSON.stringify([...storagedMeals, newMeal]);
            await AsyncStorage.setItem(MEAL_COLLECTION, storage);
        }
    } catch (error) {
        throw error;
    }
}