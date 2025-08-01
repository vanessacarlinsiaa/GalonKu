import React from "react";
import { TouchableOpacity, StyleSheet, ViewStyle } from "react-native";
import { Svg, Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

interface BackButtonProps {
  style?: ViewStyle;
}

const BackButton: React.FC<BackButtonProps> = ({ style }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={[styles.backButton, style]}
    >
      <Svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <Path
          d="M15 19L8 12L15 5"
          stroke="#0D3D6F"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    padding: 20,
    alignSelf: "flex-start",
  },
});

export default BackButton;
