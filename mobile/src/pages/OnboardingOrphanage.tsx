import React from "react";
import { Image, StyleSheet } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import Button from '../components/Button';
import Dot from '../components/Dot';




export default function OnboardingOrphanage() {

  return (
        <Onboarding 
        DotComponent={Dot}
        bottomBarHeight={120}
        bottomBarColor={'#F2F3F5'}
        showSkip={false}
        NextButtonComponent={Button}
        DoneButtonComponent={Button}
        imageContainerStyles={{position: 'absolute', width: 256, height: 279, top: 71, left: 59, right: 59}}
        containerStyles={{position: 'relative', width: 375,height: 812}}
        pages={[
        {
            backgroundColor: "#F2F3F5",
            image: <Image source={require('../images/Ilustra01.png')}/>,
            title: "Leve felicidade para o mundo",
            subtitle: "Visite orfanatos e mude o dia de muitas crianças.",
            titleStyles: {color: '#0089A5', fontFamily: "Nunito_800ExtraBold", fontSize: 38,lineHeight: 48, width: 217, height: 200, position: 'relative',right: 20.33,top: 120,
            textAlign: 'left'
             },
            subTitleStyles:{fontFamily: "Nunito_600SemiBold", fontSize: 20, lineHeight: 30, color: '#5C8599', width:234, height:60, position: 'relative',right: 13.33,top: 140,  textAlign: 'left'}
        },
        {
          backgroundColor: "#F2F3F5",
          image: <Image source={require('../images/Ilustra02.png')}/>,
          title: "Escolha um orfanato no mapa e faça uma visita",
          subtitle: "",
          titleStyles: {color: '#0089A5', fontFamily: "Nunito_800ExtraBold", fontSize: 30,lineHeight: 36, width: 253, height: 120, position: 'relative',left: 30.33,top: 240,
            textAlign: 'right'
             }
      },
        ]}
    />
  );
}


