import { CategoryList, ServiceList, ThemedScrollView, ThemedText, ThemedTextInput, ThemedView } from "@/components";
import { BACKEND_URL, beResourceMapping, Colors, MISC } from "@/constants";
import { useAccountDataQuery } from "@/hooks";
import { useAppStore } from "@/stores";
import { User } from "@/types";
import { formatAmount } from "@/utils";
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Avatar, Box, Button, Chip, Text } from "@react-native-material/core";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import ShimmerPlaceholder from "react-native-shimmer-placeholder";

export default function HomeScreen() {
  const router = useRouter();
  const appStore = useAppStore();
  const [detailsVisible, setDetailsVisible] = useState<boolean>(false);
  const { data, isError, isFetching, refetch: refetchAccountData } = useAccountDataQuery({ url: BACKEND_URL + beResourceMapping.user, userId: 102056 });

  const reloadAccountData = async () => {
    appStore.setIsLoading(true);
    setDetailsVisible(false);
    // API Call here
    await refetchAccountData();
    appStore.setIsLoading(false);
    setDetailsVisible(true);
  }

  if (data) {
    appStore.setAccountData(data as User);
  }

  return (
    <>
      <ThemedScrollView style={{ flex: 1, paddingHorizontal: 15 }}>
        <ThemedView style={{ height: "auto", display: "flex", justifyContent: "space-between", alignItems: 'center', flexDirection: 'row' }}>
          <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <Avatar size={50} image={{ uri: MISC.avatarURL }} />
            <View style={{ marginLeft: 10, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: 5 }}>
              <Box h={26}>
                <ShimmerPlaceholder
                  LinearGradient={LinearGradient}
                  style={{ height: 25, borderRadius: 8, marginBottom: 0 }}
                  visible={isFetching == false}
                  shimmerColors={Colors.shimmerColors}>

                  <ThemedText style={{ fontSize: 15, fontWeight: '700' }}>
                    {data ? data.firstName + ' ' + data.lastName : ''}
                  </ThemedText>
                </ShimmerPlaceholder>
              </Box>
              <Chip label="KYC Approved" color="green" variant="filled" labelStyle={{ fontSize: 9, fontWeight: '700' }} contentContainerStyle={{ padding: 9 }} />
            </View>
          </View>
          <View>
            <MaterialCommunityIcons name="bell-outline" size={28} color={Colors.mainAppColor} />
          </View>
        </ThemedView>
        <View style={{ height: 149, backgroundColor: Colors.mainAppColor, paddingTop: 14, paddingHorizontal: 15, display: "flex", borderRadius: 9, marginTop: 27, flexDirection: 'column', gap: 4 }}>
          <Text style={{ color: "#fcfcfc", fontWeight: "700", fontSize: 15 }}>Smobilpay Balance</Text>
          <View style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <ShimmerPlaceholder
              LinearGradient={LinearGradient}
              style={{ height: 21, borderRadius: 5, marginBottom: 0 }}
              visible={appStore.isLoading === true}
              shimmerColors={["#ffffff66"]}>
              <Text accessible={true} style={{ color: "#fcfcfc", fontWeight: "500", fontSize: 16 }}>{detailsVisible == false ? '******' : formatAmount(data?.balance ?? 0)}</Text>
            </ShimmerPlaceholder>
            <Button
              title="Fund Account"
              variant="contained"
              color={Colors.mainAppColor}
              tintColor={Colors.mainAppColor}
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
                <MaterialIcons name="add-circle" color={Colors.mainAppColor} size={18} />
              )}
              onPress={() => router.push("/fundAccount")}
            />
          </View>
          <ShimmerPlaceholder
            LinearGradient={LinearGradient}
            style={{ height: 18, borderRadius: 4, marginBottom: 0 }}
            visible={appStore.isLoading === false}
            shimmerColors={Colors.shimmerColors}
            width={'30%'}
          >
            <Text style={{ color: "#fcfcfc", fontWeight: "normal", fontSize: 14 }}>
              {
                (detailsVisible == false) ? '******' : formatAmount(data?.commissions ?? 0)
              } commissions
            </Text>
          </ShimmerPlaceholder>

          <View style={{ width: "100%", display: "flex", flexDirection: "row", flex: 1, justifyContent: "flex-end", alignItems: "center", gap: 70 }}>
            <Pressable disabled={appStore.isLoading} onPress={() => setDetailsVisible(!detailsVisible)}>
              <MaterialCommunityIcons name={detailsVisible == true ? 'eye' : 'eye-off'} color={"white"} size={24} />
            </Pressable>
            <Pressable onPress={reloadAccountData}>
              {appStore.isLoading == false && isFetching != true ? <MaterialIcons name="sync" color={"white"} size={24} /> : <ActivityIndicator
                size="small"
                color='white'
                style={{ alignSelf: "center", marginBottom: 10 }} />}
            </Pressable>
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
          <View style={{ marginVertical: 15 }}>
            <CategoryList />
          </View>
        </ThemedView>

        <ThemedView style={{ height: 80 }}>

        </ThemedView>
      </ThemedScrollView>
    </>
  );
}
