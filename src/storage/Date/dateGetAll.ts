import { mealGetAll } from "@storage/Meal/mealGetAll";

export async function dateGetAll(){
    try{
        const storage = await mealGetAll();
        const dates = storage.map(meal => meal.date);
        const uniquesDates = dates.filter((item, i) => dates.indexOf(item) === i);
        return uniquesDates;
    }catch(error){
        throw error;
    }
}