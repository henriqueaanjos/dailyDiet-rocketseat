import { MealDTO } from "./MealDTO";
import { mealGetAll } from "./mealGetAll";

export async function mealGetStatistics(){
    try {
        const storage = await mealGetAll();

        const totals = storage.length;
        const totalsOnDiet = storage.filter(meal => meal.isOnDiet).length;
        const totalsOutDiet = storage.filter(meal => !meal.isOnDiet).length;

        let currentSeq: MealDTO[] = [];
        let longestSeq: MealDTO[] = [];

        storage.forEach(meal => {
            if(meal.isOnDiet){
                currentSeq.push(meal);
            }else{
                if(currentSeq.length > longestSeq.length){
                    longestSeq = currentSeq.slice();
                }
                currentSeq = [];
            }
        });

        if(currentSeq.length > longestSeq.length){
            longestSeq = currentSeq;
        }

        // const mealsByDate = storage.reduce((acc: Record<string, MealDTO[]>, meal) => {
        //     if(!acc[meal.date]){
        //         acc[meal.date] = [];
        //     }
        //     acc[meal.date].push(meal);
        //     return acc;
        // }, {});

        // const longestSequences = Object.values(mealsByDate).map(mealsForDate =>{
        //     return mealsForDate.reduce((acc: MealDTO[], meal) => {
        //         if(meal.isOnDiet){
        //             acc.push(meal);
        //         }else if(acc.length > 0){
        //             acc = [];
        //         }
        //         return acc;
        //     }, [])
        // })

        // const longestSequence = longestSequences.reduce((acc, sequence) => {
        //     return sequence.length > acc.length ? sequence : acc;
        // }, [])

        const sequence = longestSeq.length
        return {
            totals,
            totalsOnDiet,
            totalsOutDiet,
            sequence
        }
    } catch (error) {
        throw error;
    }
}