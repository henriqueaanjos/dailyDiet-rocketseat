import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex:1;
    background-color:  ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Percentage = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.LG}px;
        line-height:  ${theme.LINE_HEIGHT};
    `}
`;

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.BODY.SM}px;
        line-height:  ${theme.LINE_HEIGHT};
    `}
`;
export const Title = styled.Text`
    width: 100%;
    text-align: center;

    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.XS}px;
        line-height:  ${theme.LINE_HEIGHT};
    `}
    margin-bottom: 24px;
`;

export const Cards = styled.View`
    gap: 12px;
`;

export const Field = styled.View`
    gap: 12px;
    flex-direction: row;
`;



