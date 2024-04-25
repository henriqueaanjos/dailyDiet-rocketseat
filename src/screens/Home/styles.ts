import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    background-color:  ${({ theme }) => theme.COLORS.GRAY_700};


`;

export const Content = styled.ScrollView.attrs(() => ({
    showsVerticalScrollIndicator: false
}))`
    padding: 24px;
`;


export const Header = styled.View`
    width: 100%; 
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 32px;
    margin-top: 66px;
`;


export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`;

export const AvatarBorder = styled.View`
    border-radius: 99px;
    border: 2px solid  ${({ theme }) => theme.COLORS.GRAY_200};
`;


export const Avatar = styled.Image`
    width: 40px;
    height: 40px;

    border-radius: 99px;
    
`;


export const Title = styled.Text`
    ${({ theme }) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.BODY.MD}px;
        line-height: ${theme.LINE_HEIGHT};
    `}

    margin-top:42px;
    margin-bottom: 8px;
`;
export const ButtonWrapper = styled.View`

`;


export const ListWrapper = styled.View`
    height: 500px;
    margin-bottom: 88px;
`;
