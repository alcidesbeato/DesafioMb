import styled from "styled-components/native";
import  Constants  from "expo-constants";
import colors from "../../styles/colors";


export const Wrapper = styled.SafeAreaView`
    background: ${colors.primary};
    flex: 1;
    justify-content: center;
    align-items: center;


`;

export const Heading = styled.Text`
    color: ${colors.purple};
    font-family: roboto_500;
    font-size: 30px;
`;



