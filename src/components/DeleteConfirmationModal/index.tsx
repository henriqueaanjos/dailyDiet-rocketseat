import { ModalProps } from 'react-native';
import {
    Box,
    Container,
    Background,
    Title,
    Buttons
} from './styles';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { mealRemove } from '@storage/Meal/mealRemove';

type Props = ModalProps & {
    mealId: string,
    closeModal: () => void
}


export function DeleteConfirmationModal({mealId, closeModal, ...rest}: Props){
    const navigation = useNavigation();
    function handleCloseModal(){
        closeModal();
    }
    async function handleConfirmeDelete(){
        try {
            await mealRemove(mealId);   
            navigation.navigate('home');
        } catch (error) {
            console.log(error);
        }
        
    }

    return(
        <Container {...rest}>
            <Background >
                <Box>
                    <Title>Deseja realmente excluir o registro da refeição?</Title>
                    <Buttons>
                        <Button
                            title="Cancelar"
                            type='secondary'
                            onPress={handleCloseModal}
                        />
                        <Button
                            title="Sim, excluir"
                            onPress={handleConfirmeDelete}
                        />
                    </Buttons>
                </Box>
            </Background>
        </Container>
    );
}