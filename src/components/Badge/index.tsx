import {
    BadgeStyleProps,
    Container, 
    Status,
    Title
} from './styles';

export function Badge({type}: BadgeStyleProps){
    return(
        <Container>
            <Status type={type}/>
            <Title>
                {type ? 'dentro da dieta' : 'fora da dieta'}
            </Title>
        </Container>
    );
}