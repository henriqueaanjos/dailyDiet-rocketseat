import {
    Container,
    Percentage,
    Subtitle,
    Title,
    Cards,
    Field,
} from './styles';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { StatisticsSecondaryCards } from '@components/StatisticsSecondaryCards';
import { Header } from '@components/Header';
import { ContentBox } from '@components/ContentBox';
import { useCallback, useState } from 'react';
import { mealGetStatistics } from '@storage/Meal/mealGetStatistics';

type RouteParams = {
    percentage: number
}

export function Statistics(){
    const [sequency, setSequency] = useState(0);
    const [totals, setTotals] = useState(0);
    const [totalsOnDiet, setTotalsOnDiet] = useState(0);
    const [totalsOutDiet, setTotalsOutDiet] = useState(0);

    const route = useRoute();
    const { percentage } = route.params as RouteParams;

    async function fetchData(){
        try {
            const data = await mealGetStatistics();
            setSequency(data.sequence);
            setTotals(data.totals);
            setTotalsOnDiet(data.totalsOnDiet);
            setTotalsOutDiet(data.totalsOutDiet);
        } catch (error) {
            console.log(error);
        }
    }

    useFocusEffect(useCallback(() => {
        fetchData();
    }, []))
    
    return(
        <Container>
            <Header 
                headerType={percentage > 50 ? 'positive': 'negative'}
                headerSize='large'
            >
                <Percentage>{percentage}%</Percentage>
                <Subtitle>das refeições dentro da dieta</Subtitle>
            </Header>
            <ContentBox>
                <Title>Estatísticas gerais</Title>
                <Cards>
                    <StatisticsSecondaryCards
                        cardType='neutral'
                        value={sequency}
                        description='melhor sequência de pratos dentro da dieta'
                    />
                    <StatisticsSecondaryCards
                        cardType='neutral'
                        value={totals}
                        description='refeições registradas'
                    />
                    <Field>
                        <StatisticsSecondaryCards
                            cardType='positive'
                            value={totalsOnDiet}
                            description='refeições dentro da dieta'
                        />
                        <StatisticsSecondaryCards
                            cardType='negative'
                            value={totalsOutDiet}
                            description='refeições dentro da dieta'
                        />
                    </Field>
                </Cards>
            </ContentBox>
        </Container>
    );
}