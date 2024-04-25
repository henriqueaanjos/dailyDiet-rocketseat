import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEAL_COLLECTION, DATE_COLLECTION } from "@storage/storageConfig";

import { mealGetAll } from "./mealGetAll";
import { mealGetById } from "./mealGetById";
import { dateGetAll } from "@storage/Date/dateGetAll";

export async function mealRemove(mealDeletedId: string){
    try {
        const storage = await mealGetAll();
        const specificMeal = await mealGetById(mealDeletedId);
        const dates = storage.filter(meals => meals.date === specificMeal?.date);
        const mealsRestains = storage.filter(meals => meals.id !== mealDeletedId);

        if(dates.length === 1){
            const storageDates = await dateGetAll();
            const newDates = storageDates.filter(date => date !== specificMeal?.date);
            await AsyncStorage.setItem(DATE_COLLECTION, JSON.stringify(newDates));
        }

        await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(mealsRestains));
    } catch (error) {
        throw error;
    }   
}