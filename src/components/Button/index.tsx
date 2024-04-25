import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    Title,
    AddIcon,
    EditIcon,
    DeleteIcon,
} from './styles';


type Props = TouchableOpacityProps & {
    icon?: 'add' | 'edit' | 'delete',
    title: string
    type?: 'primary' | 'secondary'
}

export function Button({icon, title, type, ...rest}: Props){

    const typeStyled = type ? type : icon === 'delete' ? 'secondary' : 'primary';
    return(
        <Container type={typeStyled} {...rest}>
            {
                icon === 'add' && <AddIcon/> ||
                icon === 'edit' && <EditIcon/> ||
                icon === 'delete' && <DeleteIcon/>
            }
            <Title type={typeStyled}>{title}</Title>
        </Container>
    );
}