import { ThemedTextInput } from "@/components";
import { Button } from "@react-native-material/core";
import { Image, StyleSheet, Text, View } from "react-native";

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.inputContainer}>
                    <ThemedTextInput label="username" />
                    <ThemedTextInput label="password" />
                    <View style={{marginVertical: 10}}>
                        <Text style={{ alignSelf: "center", fontSize: 15, fontWeight: "500" }}>
                            Authenticating...
                        </Text>
                    </View>
                    <Button title="Login" variant="contained" color="#0ba4b4" />
                    <Button title="Forgot Password" variant="contained" color="#0ba4b4" />
                </View>
                <View style={{ height: 30, display: 'contents', position: "fixed", bottom: 0 }}>

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
        marginTop: -40,
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
