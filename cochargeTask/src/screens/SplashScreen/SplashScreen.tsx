import React, { useEffect } from "react";
import { Container, ImageContainer } from "./SplashScreen.styles";
import { Image } from "react-native";
import { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";

const SplashScreen: React.FC = ({navigation} : any) => {

  const translateY = useSharedValue(0);

  // Animation configuration: bouncing effect (up and down)
  useEffect(() => {
    // Start the bounce animation
    translateY.value = withRepeat(
      withTiming(30, { duration: 500, easing: Easing.ease }), // Move down
      -1, // Infinite repeat
      true // Reverse the direction
    );

    setTimeout(() => {
      navigation.navigate("Home"); 
    }, 3000); 
  }, [translateY, navigation]);

  // Create animated style based on the shared value
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <Container>
      <ImageContainer style={animatedStyle}>
        <Image
          source={require("../../assets/splash.png")}
          resizeMode="contain"
          style={[{ width: 200, height: 200 }]}
        />
      </ImageContainer>
    </Container>
  );
};

export default SplashScreen;
