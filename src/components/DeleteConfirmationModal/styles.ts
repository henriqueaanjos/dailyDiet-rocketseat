import styled, { css } from 'styled-components/native';


export const Container = styled.Modal`
    margin: 20px;
    background-color:  ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 20px;
`;

export const Box = styled.View`
    width: 100%;
    background-color:  ${({ theme }) => theme.COLORS.WHITE};

    border-radius: 8px;

    padding: 40px 24px 24px 24px;

`;

export const Title = styled.Text`
    width: 100%;
    text-align: center;
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.SM}px;
        line-height:  ${theme.LINE_HEIGHT};
    `}
    margin-bottom: 32px;


`;

export const Background = styled.View`
    flex: 1;
    background-color: rgba(0,0,0,0.25);

    align-items: center;
    justify-content: center;
    
    padding: 24px;
`;

export const Buttons = styled.View`
    flex-direction: row;
    gap: 12px;
`;
