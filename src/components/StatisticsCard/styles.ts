import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native';

type StatisticCardStyleProps = {
    aboveAverage: boolean
}


export const Container = styled(TouchableOpacity)<StatisticCardStyleProps>`
    width: 100%;
    justify-content: center;
    align-items: center;

    padding: 20px 16px;

    background-color:  ${({ aboveAverage, theme }) => aboveAverage ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};

    border-radius: 8px;
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
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.BODY.XS}px;
        line-height:  ${theme.LINE_HEIGHT};
    `}
`;

export const Icon = styled(ArrowUpRight).attrs(({theme}) => ({
    size: 24,
}))`
    position: absolute;
    top: 8px;
    right: 8px;
`;


