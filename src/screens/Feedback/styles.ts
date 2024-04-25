import { TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';

type TitleStyleProps = {
    type: 'positive' | 'negative'
}


export const Container = styled(SafeAreaView)`
    flex:1;
    
    background-color:  ${({ theme }) => theme.COLORS.GRAY_700};

    align-items: center;
    justify-content: center;

    padding: 32px;
`;

export const Title = styled.Text<TitleStyleProps>`
    ${({ type, theme }) => css`
        color: ${type === 'positive' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.MD}px;
        line-height:  ${theme.LINE_HEIGHT};
    `}
    margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.BODY.MD}px;
        line-height:  ${theme.LINE_HEIGHT};
    `}
    margin-bottom: 40px;
    text-align: center;
`;

export const Highlight = styled.Text`
    font-family:  ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;


export const Image = styled.Image`
    margin-bottom: 32px;
`;

export const Button = styled(TouchableOpacity)`
    border-radius: 6px;
    padding: 16px 24px;

    background-color:  ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const ButtonTitle = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.WHITE};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.BODY.SM}px;
        line-height:  ${theme.LINE_HEIGHT};
    `}
`;


