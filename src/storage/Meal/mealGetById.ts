import { AppError } from "@utils/AppError";
import { mealGetAll } from "./mealGetAll";

export async function mealGetById(id: string){
    try {
        const storagedMeals = await mealGetAll();

        const mealFinded = storagedMeals.find(meal => meal.id === id);

        if(!mealFinded){
            throw new AppError('Não foi possivel encontrar essa refeição!');
        }

        return mealFinded ? mealFinded : null;
    } catch (error) {
        throw error;
    }
}