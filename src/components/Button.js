import React from "react";
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from "react-native";
import { globalStyles } from "../styles/global";

const Button = ({
  onPress,
  title,
  iconLeft,
  iconRight,
  style,
  textStyle,
  disabled,
  activeOpacity,
  loading,
}) => {
  return (
    <TouchableOpacity
      onPress={() => !loading && onPress && onPress()}
      disabled={disabled}
      activeOpacity={activeOpacity}
      style={[disabled ? styles.disabledButton : styles.button, style]}
    >
      {!loading && iconLeft}
      {loading ? (
        <ActivityIndicator styles={styles.indicator} color="white" />
      ) : (
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      )}
      {!loading && iconRight}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'relative',
    backgroundColor: globalStyles.bgColor.backgroundColor,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "grey",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    marginHorizontal: 5,
    color: "white",
    fontSize: 16,
    fontWeight: 'bold'
  },
});

export default Button;