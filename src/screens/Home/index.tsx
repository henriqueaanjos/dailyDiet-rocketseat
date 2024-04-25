import {
    Container, 
    Content,
    Title,
    Header,
    Logo,
    AvatarBorder,
    Avatar,
    ButtonWrapper,
    ListWrapper
} from './styles';

import { StatisticsCard } from '@components/StatisticsCard';
import { Button } from '@components/Button';
import { Alert, FlatList, ScrollView } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
import { DailyMealList } from '@components/DailyMealList';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import logoImg from '@assets/Logo.png';
import { Loading } from '@components/Loading';
import { ListEmpty } from '@components/ListEmpty';
import { dateGetAll } from '@storage/Date/dateGetAll';
import { MealDTO } from '@storage/Meal/MealDTO';
import { mealGetAll } from '@storage/Meal/mealGetAll';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DATE_COLLECTION, MEAL_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';



export function Home(){
    const [percentage, setPercentage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [dates, setDates] = useState(['']);
    const [meals, setMeals] = useState<MealDTO[]>([]);
    
    const navigation = useNavigation();

    function handleViewStatistics(){
        navigation.navigate('statistics', {percentage});
    }
    function handleCreateNewMeal(){
        navigation.navigate('mealCreation', {});
    }

    function calculatePercentage(){
        if(meals.length > 0){
            const totalsOfMeals = meals.length;
            const totalsOfMealsOnDiet = meals.filter(meal => meal.isOnDiet).length;

            const result = (totalsOfMealsOnDiet*100)/totalsOfMeals
            setPercentage(Number(result.toFixed(2)));
        }
    }

    async function fetchMeals(){
        try {
            setIsLoading(true);
            const data = await dateGetAll();
            const dataMeals = await mealGetAll();
            setMeals(dataMeals);
            setDates(data);
        } catch (error) {
            if(error instanceof AppError){
                Alert.alert('Refeição', error.message);
            }else{
                Alert.alert('Refeição', 'Não foi possivel buscar as refeições.');
                console.log(error);
            }
        }finally{
            setIsLoading(false);
        }
        // try {
        //     AsyncStorage.removeItem(MEAL_COLLECTION);
        // } catch (error) {
            
        // }
    }
    useEffect(() => {
        calculatePercentage();
    }, [meals])

    useFocusEffect(useCallback(() => {
        fetchMeals();
    }, []))
    
    return(
        <Container>
            <Content>
                <Header>
                    <Logo source={logoImg}/>
                    <AvatarBorder>
                        <Avatar source={{uri:'https://avatars.githubusercontent.com/henriqueaanjos'}}/>
                    </AvatarBorder>
                </Header>
                {
                    percentage != 0 &&
                    <StatisticsCard 
                        percentage={percentage}
                        onPress={handleViewStatistics}
                    />
                }
                <Title>Refeições</Title>
                <ButtonWrapper>
                    <Button
                        icon='add'
                        title="Nova refeição"
                        onPress={handleCreateNewMeal}
                    />
                </ButtonWrapper>
                <ListWrapper>
                {isLoading ? <Loading/>:
                    dates.length === 0 ? <ListEmpty message='Nenhuma Refeição registrada, vamos começar ?'/>

                    :dates.map(date => 
                        <DailyMealList
                            key={date}
                            date={date}
                            meals={meals.filter(meal => meal.date === date)}
                        /> 
                    )
                }
                </ListWrapper>
            </Content>
        </Container>
    );
}