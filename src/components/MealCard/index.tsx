import { MealDTO } from '@storage/Meal/MealDTO';
import {
    Container, 
    Divider, 
    Name, 
    Status, 
    Time
} from './styles';
import { useNavigation } from '@react-navigation/native';

type Props = {
    meal: MealDTO;
}


export function MealCard({meal}: Props){
    const navigation = useNavigation();
    function handleViewDetails(){
        console.log(meal.id);
        navigation.navigate('mealDetails', {mealId: meal.id})
    }
    return(
        <Container onPress={handleViewDetails}>
            <Time>{meal.time}</Time>
            <Divider/>
            <Name>{meal.name}</Name>
            <Status onDiet={meal.isOnDiet}/>
        </Container>
    );
}