import { Header } from '@components/Header';
import {
    Container,
    Title,
    Form,
    Field,
    Label,
    DoubleField,
    Buttons,
    DividedField
} from './styles';
import { ContentBox } from '@components/ContentBox';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { ButtonSelection } from '@components/ButtonSelection';
import { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MealDTO } from '@storage/Meal/MealDTO';
import { Alert } from 'react-native';
import { mealAdd } from '@storage/Meal/mealAdd';
import { AppError } from '@utils/AppError';
import uuid from 'react-native-uuid';
import { mealGetById } from '@storage/Meal/mealGetById';

type NavigationProps = 'positive' | 'negative'

type RouteParams = {
    mealId: string
}

export function MealCreation(){
    const [buttonSelection, setButtonSelection] = useState<NavigationProps>();
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const navigation = useNavigation();
    const route = useRoute();
    const {mealId} = route.params as RouteParams;
    
    function handleChangeButtonSelection(type: NavigationProps){
        setButtonSelection(type);
    }

    async function handleRegistry(){
        try{
                const id = mealId ? mealId : uuid.v4().toString();
                console.log(id);
                const newMeal = {
                    id,
                    name,
                    description,
                    date,
                    time,
                    isOnDiet: buttonSelection === 'positive' ? true : false
                }
                if(newMeal.name.trim().length === 0 ){
                    return Alert.alert('Nova Refeição', 'Informe o nome da refeição')
                }if(newMeal.date.trim().length === 0 ){
                    return Alert.alert('Nova Refeição', 'Informe a data da refeição')
                }if(newMeal.time.trim().length === 0 ){
                    return Alert.alert('Nova Refeição', 'Informe o horário da refeição')
                }if(!buttonSelection){
                    return Alert.alert('Nova Refeição', 'Selecione se a refeição está ou não na dieta!')
                }
                await mealAdd(newMeal);
                if(mealId){
                    navigation.navigate('mealDetails', {mealId: mealId})
                }else{
                    navigation.navigate('feedback', {type: buttonSelection})
                }
        }catch(error){
            if(error instanceof AppError){
                Alert.alert('Nova Refeição', error.message);
            }else{
                Alert.alert('Nova Refeição', 'Não foi possivel registrar uma nova refeição.');
                console.log(error);
            }
        }
        
    }
    async function fetchMeal(){
        try {
            setIsLoading(true);
            const data = await mealGetById(mealId);
            if(data){
                setName(data.name);
                setDescription(data.description);
                setDate(data.date);
                setTime(data.time);
                setButtonSelection(data.isOnDiet ?'positive' : 'negative');
            }
        } catch (error) {
            
        }finally{
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if(mealId)
            fetchMeal();
    }, [])

    return(
        <Container>
            <Header 
                headerType='neutral'
                headerSize='short'
            >
                <Title>{mealId ? 'Editar refeição' :'Nova refeição'}</Title>
            </Header>
            <ContentBox>
                <Form>
                    <Field>
                        <Label>Nome</Label>
                        <Input 
                            value={name}
                            onChangeText={setName}
                        />
                    </Field>
                    <Field>
                        <Label>Descrição</Label>
                        <Input 
                            multiline
                            numberOfLines={4}
                            value={description}
                            onChangeText={setDescription}
                        />
                    </Field>
                    <DoubleField>
                        <DividedField>
                            <Label>Data</Label>
                            <Input 
                                value={date}
                                onChangeText={setDate}
                            />
                        </DividedField>
                        <DividedField>
                            <Label>Hora</Label>
                            <Input 
                                value={time}
                                onChangeText={setTime}
                            />
                        </DividedField>
                    </DoubleField>
                    <DoubleField>
                        <Field>
                            <Label>Está dentro da dieta?</Label>
                            <Buttons>
                                <ButtonSelection
                                    title='Sim'
                                    type='positive'
                                    isActive={buttonSelection === 'positive'}
                                    onPress={() => handleChangeButtonSelection('positive')}
                                />
                                <ButtonSelection
                                    title='Não'
                                    type='negative'
                                    isActive={buttonSelection === 'negative'}
                                    onPress={() => handleChangeButtonSelection('negative')}
                                />
                            </Buttons>
                        </Field>
                    </DoubleField>
                </Form>
                <Field>
                    <Button
                        title={mealId ? 'Salvar alterações' : 'Cadastrar refeição'}
                        onPress={handleRegistry}
                        
                    />
                </Field>
            </ContentBox>
        </Container>
    );
}