import { TouchableOpacityProps } from 'react-native';
import {
    Container, 
    Icon, 
    Percentage,
    Subtitle,
} from './styles';
import { useTheme } from 'styled-components/native';

type Props = TouchableOpacityProps & {
    percentage: number,
}

export function StatisticsCard({percentage, ...rest}: Props){
    const { COLORS } = useTheme();

    return(
        <Container {...rest} aboveAverage={percentage > 70}>
            <Percentage>{percentage}%</Percentage>
            <Subtitle>das refeições dentro da dieta</Subtitle>
            <Icon color={percentage > 50 ? COLORS.GREEN_DARK: COLORS.RED_DARK}/>
        </Container>
    );
}