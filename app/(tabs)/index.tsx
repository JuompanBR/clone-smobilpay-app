import { ThemedText } from "@/components/ThemedText";
import { ThemedTextInput } from "@/components/ThemedTextInput";
import { ThemedView } from "@/components/ThemedView";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Avatar, Button, Chip, Text } from "@react-native-material/core";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <ThemedView style={{ flex: 1, paddingTop: 65, paddingHorizontal: 15 }}>
        <ThemedView style={{ height: "auto", display: "flex", justifyContent: "space-between", alignItems: 'center', flexDirection: 'row' }}>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Avatar image={{ uri: "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg" }} />
            <View style={{ marginLeft: 10, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: 5 }}>
              <ThemedText style={{ fontSize: 18, fontWeight: '700' }}>Goummo Bill Boris</ThemedText>
              <Chip label="KYC Approved" color="green" variant="filled" labelStyle={{ fontSize: 11, fontWeight: '700' }} contentContainerStyle={{ padding: 9 }} />
            </View>
          </View>
          <View>
            <MaterialCommunityIcons name="bell-outline" size={32} color="#01949b" />
          </View>
        </ThemedView>
        <View style={{ height: 169, backgroundColor: "#01949b", paddingTop: 15, paddingHorizontal: 15, display: "flex", borderRadius: 10, marginTop: 27, flexDirection: 'column', gap: 6.8 }}>
          <Text style={{ color: "#fcfcfc", fontWeight: "700", fontSize: 16 }}>Smobilpay Balance</Text>
          <View style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ color: "#fcfcfc", fontWeight: "400", fontSize: 18 }}>XAF 2500</Text>
            <Button
              title="Fund Account"
              variant="contained"
              color="#01949b"
              tintColor="#01949b"
              disableElevation
              contentContainerStyle={{
                borderRadius: 60,
                backgroundColor: "white",
              }}
              style={{
                borderWidth: 0,
                paddingHorizontal: 0,
                paddingVertical: 0,
              }}
              titleStyle={{
                fontSize: 12,
                textTransform: 'none',
              }}
              leading={() => (
                <MaterialIcons name="add-circle" color="#01949b" size={18} />
              )}
            />
          </View>
          <Text style={{ color: "#fcfcfc", fontWeight: "normal", fontSize: 14 }}>XAF 60.00 commissions</Text>
          <View style={{ width: "100%", display: "flex", flexDirection: "row", flex: 1, justifyContent: "flex-end", alignItems: "center", gap: 70 }}>
            <MaterialCommunityIcons name="eye" color={"white"} size={26} />
            <MaterialIcons name="sync" color={"white"} size={26} />
          </View>
        </View>
        <ThemedView style={{ marginTop: 20 }}>
          <ThemedTextInput
            label="Search"
            variant="outlined"
          />
        </ThemedView>
        <ThemedView style={{ marginTop: 20 }}>
          <ThemedText style={{fontSize: 18, fontWeight: "700"}}>Favourite Services</ThemedText>
        </ThemedView>

        <ThemedView style={{ marginTop: 20 }}>
          
        </ThemedView>

        <ThemedView style={{ marginTop: 20 }}>
          <ThemedText style={{fontSize: 18, fontWeight: "700"}}>Categories</ThemedText>
        </ThemedView>
      </ThemedView>

    </>
  );
}
