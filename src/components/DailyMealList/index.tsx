import { MealCard } from '@components/MealCard';
import {
    Container, DateTitle, MealList,
} from './styles';

import { MealDTO } from '@storage/Meal/MealDTO';

type Props = {
    date: string,
    meals: MealDTO[]
}

export function DailyMealList({date, meals}: Props){
    return(
        <Container>
            <DateTitle>{date.replace(/\//g, '.')}</DateTitle>
            <MealList>
                {
                    meals.map(item => 
                        <MealCard
                            key={`${item.time}-${item.name}`}
                            meal={item}
                        />    
                    )
                }
            </MealList>
        </Container>
    );
}