import { ReactNode } from "react";
import {StyleProp,TextStyle,Text} from "react-native";

interface ColoredTextTemplate{
    children: ReactNode;
    color?:string;
    style?:StyleProp<TextStyle>
  }
const ColoredText: React.FC<ColoredTextTemplate> = ({children,color='white',style}) => {
    return(
        <>
        <Text style={[{color},style]}>
            {children}
        </Text>
        </>
    )
}

export default ColoredText;
    