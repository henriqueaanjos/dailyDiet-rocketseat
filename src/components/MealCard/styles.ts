import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type StatusStyleProps = {
    onDiet: boolean
}

export const Container = styled(TouchableOpacity)`
    width: 100%;

    padding: 14px 16px 14px 12px;
    border: 1px solid  ${({ theme }) => theme.COLORS.GRAY_500};

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap:12px;

    margin-top: 8px;

`;

export const Time = styled.Text`
     ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.BODY.XS}px;
        line-height: ${theme.LINE_HEIGHT};
    `}
`;

export const Divider = styled.View`
    width: 1px;
    height: 100%;
    background-color:  ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Name = styled.Text`
    flex:1;
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.BODY.MD}px;
        line-height: ${theme.LINE_HEIGHT};
    `}

`;

export const Status = styled.View<StatusStyleProps>`
    width:14px;
    height: 14px;
    border-radius: 99px;

    background-color:  ${({ onDiet, theme }) => onDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;





