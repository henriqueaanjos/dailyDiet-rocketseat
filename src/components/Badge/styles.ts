import styled, { css } from 'styled-components/native';

export type BadgeStyleProps = {
    type: boolean
}

export const Container = styled.View`
    padding: 8px 16px;;
    background-color:  ${({ theme }) => theme.COLORS.GRAY_600};

    border-radius: 999px;
    flex-direction: row;
    align-items: center;
    align-self: flex-start;
    justify-content: center;
    
    gap: 8px;
`;

export const Status = styled.View<BadgeStyleProps>`
    width: 8px;
    height: 8px;

    border-radius: 999px;

    background-color:  ${({ type, theme }) => type ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.BODY.SM}px;
        line-height:  ${theme.LINE_HEIGHT};
    `}
`;

