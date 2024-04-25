import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import {
    Container,
    Title,
    Info,
    MealName,
    MealDescription,
    MealDateTimeLabel,
    MealDateTime,
    Buttons
} from './styles';
import { MealDTO } from '@storage/Meal/MealDTO';
import { Header } from '@components/Header';
import { ContentBox } from '@components/ContentBox';
import { Button } from '@components/Button';
import { Badge } from '@components/Badge';
import { useCallback, useState } from 'react';
import { DeleteConfirmationModal } from '@components/DeleteConfirmationModal';
import { Alert } from 'react-native';
import { mealGetById } from '@storage/Meal/mealGetById';
import { Loading } from '@components/Loading';
import { AppError } from '@utils/AppError';

type RouteParams = {
    mealId: string
}

export function MealDetails(){
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [meal, setMeal] = useState<MealDTO>({} as MealDTO);
    const navigation = useNavigation();
    const route = useRoute();
    const { mealId } = route.params as RouteParams;

    function handleEditMeal(){
        navigation.navigate('mealCreation', {mealId});
    }

    function handleOpenModal(){
        setModalIsVisible(true);
    }
    function handleCloseModal(){
        setModalIsVisible(false);
    }

    async function fetchMeal(){
        try {
            setIsLoading(true);
            const data = await mealGetById(mealId);
            console.log("Dados do ID:", data);
            if(data)
                setMeal(data);
        } catch (error) {
            if(error instanceof AppError){
                Alert.alert('Refeição', error.message);
            }else{
                Alert.alert('Refeição', 'Não foi possivel buscar essa refeição.');
                console.log(error);
            }
        }finally{
            setIsLoading(false);
        }
    }

    useFocusEffect(useCallback(() => {
        fetchMeal();
    }, []));

    return(
        <Container>
            {isLoading ? <Loading/> :
            <>
                <Header 
                    headerType={meal.isOnDiet ? 'positive' : 'negative'}
                    headerSize='short'
                >
                    <Title>Refeição</Title>
                </Header>
                <ContentBox>
                    <Info>
                        <MealName>{meal.name}</MealName>
                        <MealDescription>{meal.description}</MealDescription>
                        <MealDateTimeLabel>Data e hora</MealDateTimeLabel>
                        <MealDateTime>{meal.date} às {meal.time}</MealDateTime>
                        <Badge type={meal.isOnDiet}/>
                    </Info>
                    <Buttons>
                        <Button
                            title="Editar Refeição"
                            icon='edit'
                            onPress={handleEditMeal}
                        />
                        <Button
                            title="Excluir Refeição"
                            icon='delete'
                            onPress={handleOpenModal}
                        />
                    </Buttons>
                    <DeleteConfirmationModal 
                        mealId={mealId}
                        animationType="slide"
                        transparent={true}
                        visible={modalIsVisible}
                        closeModal={handleCloseModal}
                        onDismiss={handleCloseModal}
                    />
                </ContentBox>
            </>
            }
        </Container>
    );
}