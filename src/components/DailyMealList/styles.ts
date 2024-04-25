import styled, { css } from 'styled-components/native';


export const Container = styled.View`
    flex:1;
    margin-top: 32px;
`;

export const DateTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.SM}px;
        line-height: ${theme.LINE_HEIGHT};
    `}
`;

export const MealList = styled.View`

`;

