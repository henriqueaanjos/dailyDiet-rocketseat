import styled, { css } from 'styled-components/native';
import { PencilSimpleLine, Plus, Trash } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';

type ButtonStyleProps = {
    type: 'primary' | 'secondary'
}


export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
    flex-grow: 1;

    padding: 16px 24px;

    border-radius: 6px;

    background-color:  ${({ type, theme }) => type === 'primary' ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_700};

    flex-direction: row;

    align-items: center;
    justify-content: center;

    gap: 12px;
    
     ${({ theme, type }) => type === 'secondary' && css`
        border: 1px solid ${theme.COLORS.GRAY_100};
     `};
`;

export const Title = styled.Text<ButtonStyleProps>`
    ${({ theme, type }) => css`
        color: ${type === 'secondary' ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE}; 
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.BODY.SM}px;
        line-height: ${theme.LINE_HEIGHT};
    `};
`;

export const AddIcon = styled(Plus).attrs(({ theme }) => ({
    size: 18,
    color: theme.COLORS.WHITE
}))`

`;

export const EditIcon = styled(PencilSimpleLine).attrs(({ theme }) => ({
    size: 18,
    color: theme.COLORS.WHITE
}))`

`;
export const DeleteIcon = styled(Trash).attrs(({ theme }) => ({
    size: 18,
    color: theme.COLORS.GRAY_100
}))`

`;



