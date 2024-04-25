import { ButtonBackIcon } from '@components/ButtonBackIcon';
import {
    Container, HeaderStyleProps
} from './styles';

type Props = HeaderStyleProps & {
    children: React.ReactNode,
}

export function Header({children, headerType, headerSize}: Props){
    return(
        <Container headerType={headerType} headerSize={headerSize}>
            <ButtonBackIcon ButtonType={headerType}/>
            {children}
        </Container>
    );
}