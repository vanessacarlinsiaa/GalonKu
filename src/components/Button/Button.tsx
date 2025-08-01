import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  variant = "primary",
}) => {
  const isSecondary = variant === "secondary";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        isSecondary ? styles.secondary : styles.primary,
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          isSecondary ? styles.textSecondary : styles.textPrimary,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
  },
  primary: {
    backgroundColor: "#274871",
  },
  secondary: {
    backgroundColor: "#E1F1FD",
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
  },
  textPrimary: {
    color: "#E1F1FD",
  },
  textSecondary: {
    color: "#274871",
  },
});

export default Button;
