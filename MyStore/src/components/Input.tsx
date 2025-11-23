import { Button,KeyboardTypeOptions,StyleSheet,Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import {MaterialIcons, Ionicons} from "@expo/vector-icons";
import { useState } from "react";

type Props = {
    required? : boolean;
    type?: 'text' | 'email' | 'password' | 'number';
    value: string;
    placeholder : string;
    onChange: (text: string) => void;
}

export default function Input ({type = "text", required, value, placeholder, onChange}: Props){
    const [isSecureText, setIsSecureText] = useState(type === "password");
    const isPasswordField = type === 'password';
   
    const icon = type === 'email' ? 'email' : 
                    type === 'password' ? 'lock' : ''

    const keyboardType: KeyboardTypeOptions = 
        type==='email'? 'email-address' : 
        type === 'number' ? 'numeric' :
        'default';

        //funcion para calcular errores de validacion
        //output: string 
    return(
        //wrapper
        <View style={styles.wrapper}>
            {/* //inputContainer */}
            <View style={[styles.inputContainer]}>
                <MaterialIcons name={icon as any } size={20} color="#000000" />
                <TextInput 
                 placeholder={placeholder}
                 value={value} 
                 onChangeText={onChange}
                 onBlur={()=>{}}
                 secureTextEntry={isSecureText}
                 style={styles.input}
                 keyboardType={keyboardType}
                 />
                
              { isPasswordField && <TouchableOpacity 
                    onPress={
                        ()=>{
                            setIsSecureText(!isSecureText);
                        }
                    }
                > 
                    <Ionicons name={isSecureText ? 'eye' : 'eye-off'} size={22} />
                </TouchableOpacity>}
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
   wrapper:{
        marginBottom: 10,
   },
    inputContainer: {
        //distribucion de componentes
        flexDirection: 'row',
        alignItems: 'center',
        //estilizacion de input
        borderWidth: 1,
        borderColor:'#ccc',
        borderRadius: 8, 
        paddingHorizontal: 13,
        backgroundColor: '#f9f9f9',
    },
    input:{
        //agregando espacio al componente input nativo
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: '80%',
    },
    inputError: {
        borderColor: 'red',
        color: 'red'
    }
})