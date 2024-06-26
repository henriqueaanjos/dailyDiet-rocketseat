import {
    Container,
} from './styles';

type Props = {
    children: React.ReactNode
}

export function ContentBox({children}: Props){
    return(
        <Container>
            {children}
        </Container>
    );
}