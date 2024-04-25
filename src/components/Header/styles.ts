import styled, { css } from 'styled-components/native';

export type HeaderStyleProps = {
    headerType: 'neutral' | 'positive' | 'negative',
    headerSize: 'large' | 'short'
}

export const Container = styled.View<HeaderStyleProps>`
    height:  ${({ headerSize }) => headerSize === 'short' ? 132 : 200}px;
    width: 100%;
    align-items: center;
    justify-content: center;

    ${({ headerType, theme }) => headerType === 'positive' && css`
        background-color:  ${theme.COLORS.GREEN_LIGHT};
    `}
    ${({ headerType, theme }) => headerType === 'negative' && css`
        background-color:  ${theme.COLORS.RED_LIGHT};
    `}
    ${({ headerType, theme }) => headerType === 'neutral' && css`
        background-color:  ${theme.COLORS.GRAY_500};
    `}      

    padding-top: 16px;
`;

