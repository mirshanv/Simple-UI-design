import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductDetails = (props) => {
  const { route } = props;

  return (
    <View>
      <Text>ProductDetails</Text>
      {console.log("++++++++++++++++", route)}
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
