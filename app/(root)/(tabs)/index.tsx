import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-500 text-[40px] font-rubik">Hello</Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/profile">pROFILE</Link>
      <Link href="/properties/1">property</Link>
    </View>
  );
}
