import { Text, View } from "react-native";
import "../global.css";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-red-500">Edit app/index.tsx to edit this screen.</Text>
      <TouchableOpacity onPress={()=>router.push('/(tabs)/profile')}>
        <Text>Profile</Text>

      </TouchableOpacity>
    </View>
  );
}
