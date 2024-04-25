import {
    Container, Description, StatisticSecondaryCardsStyleProps, Value,
} from './styles';

type StatisticsSecondaryCarsProps = StatisticSecondaryCardsStyleProps & {
    value: number,
    description: string
}

export function StatisticsSecondaryCards({cardType, value, description}: StatisticsSecondaryCarsProps){
    return(
        <Container cardType={cardType}>
            <Value>{value}</Value>
            <Description>{description}</Description>
        </Container>
    );
}