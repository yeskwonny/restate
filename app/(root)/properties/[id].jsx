import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Property = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>property {id}</Text>
    </View>
  );
};

export default Property;
