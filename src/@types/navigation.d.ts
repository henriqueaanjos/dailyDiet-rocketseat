import { MealDTO } from "@storage/Meal/MealDTO"

export declare global{
    namespace ReactNavigation{
        interface RootParamList{
            home: undefined,
            statistics: {
                percentage: number
            },
            mealCreation: {
                mealId?: string
            },
            mealDetails: {
                mealId: string
            },
            feedback: {
                type: 'positive' | 'negative'
            }
        }
    }
}