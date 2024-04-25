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

export const Form = styled.View`
    flex: 1;
    gap: 24px;
    margin-top: 7px;
`;

export const Field = styled.View`
    gap: 4px;
`;
export const DividedField = styled.View`
    flex: 1;
    gap: 4px;
`;

export const Label = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.TITLE.XS}px;
        line-height:  ${theme.LINE_HEIGHT};
    `}
`;

export const DoubleField = styled.View`
    flex-direction: row;
    gap:20px;
    align-items: center;
    justify-content: space-between;
`;

export const Buttons = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 8px
`;

