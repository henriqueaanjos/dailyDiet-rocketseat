import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealDTO } from "./MealDTO";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export async function mealGetAll(){
    try {
        const storage = await AsyncStorage.getItem(MEAL_COLLECTION);
        const meals: MealDTO[] = storage ? JSON.parse(storage) : [];

        const orderStorage = meals.sort((a, b) => {
            if(a.date != b.date){
                return a.date.localeCompare(b.date);
            }else{
                return a.time.localeCompare(b.time);
            }
        });

        return orderStorage;
    } catch (error) {
        throw error
    }
}