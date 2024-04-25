import styled, { css } from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    background-color:  ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.SM}px;
        line-height:  ${theme.LINE_HEIGHT};
    `}
`;

export const Info = styled.View`
    flex: 1;
`;

export const MealName = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.MD}px;
        line-height:  ${theme.LINE_HEIGHT};
    `}
    margin-bottom: 8px;
`;

export const MealDescription = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.BODY.MD}px;
        line-height:  ${theme.LINE_HEIGHT};
    `}
    margin-bottom: 24px;
`;

export const MealDateTimeLabel = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.XS}px;
        line-height:  ${theme.LINE_HEIGHT};
    `}
    margin-bottom: 8px;
`;

export const MealDateTime = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.BODY.MD}px;
        line-height:  ${theme.LINE_HEIGHT};
    `}
    margin-bottom: 24px;
`;

export const Buttons = styled.View`
    width:100%;
    gap: 8px;
`;


