import styled, { css } from 'styled-components/native';


export const Container = styled.View`
    flex:1;
    justify-content: center;
    align-items: center;
`;

export const Message = styled.Text`
    text-align: center;

    ${({ theme }) => css`
        font-size:  ${theme.FONT_SIZE.BODY.MD}px;
        font-family:  ${theme.FONT_FAMILY.REGULAR};
        color:  ${theme.COLORS.GRAY_100};
        line-height: ${theme.LINE_HEIGHT};
    `};
    
`;
