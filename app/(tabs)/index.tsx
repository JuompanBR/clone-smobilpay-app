import { CategoryList, ServiceList, ThemedScrollView, ThemedText, ThemedTextInput, ThemedView } from "@/components";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Avatar, Button, Chip, Text } from "@react-native-material/core";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <ThemedScrollView style={{ flex: 1, paddingHorizontal: 15 }}>
        <ThemedView style={{ height: "auto", display: "flex", justifyContent: "space-between", alignItems: 'center', flexDirection: 'row' }}>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Avatar size={50} image={{ uri: "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg" }} />
            <View style={{ marginLeft: 10, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: 5 }}>
              <ThemedText style={{ fontSize: 15, fontWeight: '700' }}>Goummo Bill Boris</ThemedText>
              <Chip label="KYC Approved" color="green" variant="filled" labelStyle={{ fontSize: 9, fontWeight: '700' }} contentContainerStyle={{ padding: 9 }} />
            </View>
          </View>
          <View>
            <MaterialCommunityIcons name="bell-outline" size={28} color="#0ba4b4" />
          </View>
        </ThemedView>
        <View style={{ height: 149, backgroundColor: "#0ba4b4", paddingTop: 14, paddingHorizontal: 15, display: "flex", borderRadius: 9, marginTop: 27, flexDirection: 'column', gap: 4 }}>
          <Text style={{ color: "#fcfcfc", fontWeight: "700", fontSize: 15 }}>Smobilpay Balance</Text>
          <View style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text style={{ color: "#fcfcfc", fontWeight: "400", fontSize: 16 }}>XAF 2500</Text>
            <Button
              title="Fund Account"
              variant="contained"
              color="#0ba4b4"
              tintColor="#0ba4b4"
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
                fontSize: 11,
                textTransform: 'none',
              }}
              leading={() => (
                <MaterialIcons name="add-circle" color="#0ba4b4" size={18} />
              )}
            />
          </View>
          <Text style={{ color: "#fcfcfc", fontWeight: "normal", fontSize: 14 }}>XAF 60.00 commissions</Text>
          <View style={{ width: "100%", display: "flex", flexDirection: "row", flex: 1, justifyContent: "flex-end", alignItems: "center", gap: 70 }}>
            <MaterialCommunityIcons name="eye" color={"white"} size={24} />
            <MaterialIcons name="sync" color={"white"} size={24} />
          </View>
        </View>
        <ThemedView style={{ marginTop: 20 }}>
          <ThemedTextInput
            label="Search"
            variant="outlined"
            autoComplete="off"
            leading={() => (
              <MaterialIcons name="search" size={30} color={'#444'} />
            )}
          />
        </ThemedView>
        <ThemedView style={{ flexDirection: "column", flexWrap: "wrap", gap: 10, marginTop: 20 }}>
          <ThemedText style={{ fontSize: 18, fontWeight: "700" }}>Favourite Services</ThemedText>
            <ServiceList />
        </ThemedView>
        <ThemedView style={{ marginTop: 20 }}>
          <ThemedText style={{ fontSize: 18, fontWeight: "700" }}>Categories</ThemedText>
          <View style={{marginVertical: 15}}>
            <CategoryList />
          </View>
        </ThemedView>

        <ThemedView style={{ height: 80 }}>

        </ThemedView>
      </ThemedScrollView>
    </>
  );
}
