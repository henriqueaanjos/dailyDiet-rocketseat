import { TouchableOpacityProps } from 'react-native';
import {
    Container,
    IconDiet
} from './styles';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

type Props = TouchableOpacityProps & {
    ButtonType: 'neutral' | 'positive' | 'negative'
}

export function ButtonBackIcon({ButtonType, ...rest}: Props){
    const { COLORS } = useTheme();
    const navigation = useNavigation();

    function handleGoBack(){
        navigation.navigate('home');
    }

    return(
        <Container  onPress={handleGoBack} {...rest}>
            <IconDiet 
                
                color={ButtonType === 'positive' ? COLORS.GREEN_DARK : 
                ButtonType === 'negative' ? COLORS.RED_DARK:
                COLORS.GRAY_200
                }
                size={24}
            />
        </Container>
    );
}