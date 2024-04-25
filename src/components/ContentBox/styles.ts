import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;

    top: -32px;
    

    background-color:  ${({ theme }) => theme.COLORS.GRAY_700};

    padding: 40px 24px;

    border-radius: 20px 20px 0 0;
`;