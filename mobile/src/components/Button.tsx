import React from 'react';
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from 'react-native'
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";



export default function Button() {
const navigation = useNavigation();


  function handleGoOrphanageMap(){
    navigation.navigate('OrphanageMap');

  }

    return (
       
        <RectButton
        style={styles.OnboardingButton}
        onPress={handleGoOrphanageMap}
      >
        <Feather name="arrow-right" size={20} color="#15B6D6" />
      </RectButton>
    )
    
}

const styles = StyleSheet.create({
    OnboardingButton:{
        width: 56,
        height: 56,
        backgroundColor: "#D1EDF2",
        borderRadius: 20,
    
        justifyContent: "center",
        alignItems: "center",
        marginRight: 30
    }
})

