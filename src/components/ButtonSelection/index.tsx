import { TouchableOpacityProps } from 'react-native';
import {
    ButtonSelectionStyleProps,
    Container,
    Title,
    Status,
} from './styles';

type Props = ButtonSelectionStyleProps & TouchableOpacityProps & {
    title: string
};

export function ButtonSelection({isActive, type, title, ...rest}: Props){
    return(
        <Container isActive={isActive} type={type} {...rest}>
            <Status type={type}/>
            <Title>{title}</Title>
        </Container>
    );
}