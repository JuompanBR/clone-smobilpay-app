import { ThemedTextInput } from "@/components";
import { useAppStore } from "@/stores";
import { ActivityIndicator, Button, Spacer } from "@react-native-material/core";
import { Image, StyleSheet, Text, View } from "react-native";
import { useAuth } from "./AuthContext";

const Login = () => {

    const { login, isAuthenticated } = useAuth();
    const { setIsLoading, isLoading } = useAppStore();

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.inputContainer}>
                    <ThemedTextInput editable={!isLoading} label="username" />
                    <ThemedTextInput editable={!isLoading} label="password" />
                    <View style={{ marginVertical: 7 }}>
                        {isLoading &&
                            <>
                                <ActivityIndicator
                                    size="large"
                                    color="#222"
                                    style={{ alignSelf: "center", marginBottom: 10 }} />
                                <Text style={{ color: "#222", alignSelf: "center", fontSize: 15, fontWeight: "400", opacity: 1 }}>
                                    Authenticating...
                                </Text>
                            </>
                        }
                    </View>
                    <Button contentContainerStyle={{ height: 42 }} disabled={isLoading} onPress={() => login()} title="Login" variant="contained" color="#0b9aa9ff" titleStyle={{ color: "white", fontSize: 16 }} />
                    <Spacer h={4} />
                    <Button contentContainerStyle={{ height: 42 }} disabled={isLoading} title="Forgot Password" variant="contained" color="#0b9aa9ff" titleStyle={{ color: "white", fontSize: 16 }} />
                </View>
                <View style={{ height: 30, display: 'contents', position: "absolute", bottom: 0 }}>

                </View>
            </View>
            <Image
                source={require("@/assets/images/auth_bottom_image.jpg")}
                style={styles.bottomImage}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0ba4b4",
        justifyContent: "center",
        alignItems: "center",
    },
    innerContainer: {
        width: "100%",
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        position: "absolute",
        zIndex: 6
    },
    inputContainer: {
        width: "70%",
        gap: 15,
    },
    bottomImage: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        resizeMode: "cover",
        zIndex: 1,
    },
});

export default Login;
