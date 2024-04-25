import { useNavigation, useRoute } from '@react-navigation/native';
import {
    Button,
    Container, 
    Image, 
    Subtitle, 
    Title,
    ButtonTitle,
    Highlight
} from './styles';

import IllustrationPositive from '@assets/Illustration.png';
import IllustrationNegative from '@assets/Illustration-fail.png';

type RouteParams = {
    type: 'positive' | 'negative'
}

export function Feedback(){
    const route = useRoute();
    const { type } = route.params as RouteParams;

    const navigation = useNavigation();

    function handleGoHome(){
        navigation.navigate('home');
    }

    return(
        <Container>
            <Title type={type}>
                {
                    type === 'positive' ? 'Continue assim!' : 'Que pena!'
                }
            </Title>
            <Subtitle>
                {type === 'positive' ? 'Você continua' : 'Você'} 
                <Highlight>
                    {type === 'positive' ? ' dentro da dieta' : ' saiu da dieta'}
                </Highlight>
                {type === 'positive' ? '. Muito bem!' : ' dessa vez, mas continue se esforçando e não desista!'} 
            </Subtitle>
            <Image source={type === 'positive' ? IllustrationPositive : IllustrationNegative}/>
            <Button
                onPress={handleGoHome}
            >
                <ButtonTitle>Ir para página inicial</ButtonTitle>
            </Button>
        </Container>
    );
}