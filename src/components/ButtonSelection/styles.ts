import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type StatusStyleProps = {
    type: 'negative' | 'positive'
}

export type ButtonSelectionStyleProps = StatusStyleProps & {
    isActive: boolean,
}


export const Container = styled(TouchableOpacity)<ButtonSelectionStyleProps>`
    flex-grow: 1;

    ${({ isActive, type, theme }) => isActive && css`
        border: 1px solid ${type=== 'positive' ? theme.COLORS.GREEN_DARK: theme.COLORS.RED_DARK};
    `}

    background-color:  ${({ type, theme }) =>   type === 'positive' ? theme.COLORS.GREEN_LIGHT: theme.COLORS.RED_LIGHT};

    ${({ isActive, theme }) => !isActive && css`
        background-color: ${theme.COLORS.GRAY_600};
    `}

    border-radius: 6px;

    padding:16px;

    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

export const Status = styled.View<StatusStyleProps>`
    width: 8px;
    height: 8px;

    border-radius: 999px;

    background-color:  ${({ type, theme }) => type === 'positive' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;


export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.XS}px;
        line-height:  ${theme.LINE_HEIGHT};
    `}
`;
