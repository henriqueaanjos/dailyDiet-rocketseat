import styled, { css } from 'styled-components/native';

export type StatisticSecondaryCardsStyleProps = {
    cardType: 'neutral' | 'positive' | 'negative'
}

export const Container = styled.View<StatisticSecondaryCardsStyleProps>`
        flex-grow: 1;
        justify-content: center;
        align-items: center;

        padding: 16px;
        gap: 8px;

        border-radius: 8px;
        ${({ cardType, theme }) => cardType === 'positive' && css`
            background-color:  ${theme.COLORS.GREEN_LIGHT};
        `}
        ${({ cardType, theme }) => cardType === 'negative' && css`
            background-color:  ${theme.COLORS.RED_LIGHT};
        `}
        ${({ cardType, theme }) => cardType === 'neutral' && css`
            background-color:  ${theme.COLORS.GRAY_600};
        `}
`;

export const Value = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.LG}px;
        line-height:  ${theme.LINE_HEIGHT};
    `}
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.BODY.XS}px;
        line-height:  ${theme.LINE_HEIGHT};
    `}
`;