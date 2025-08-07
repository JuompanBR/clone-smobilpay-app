import { ThemedTextInput } from "@/components";
import { Colors } from "@/constants";
import { useAppStore, usePersistentStore } from "@/stores";
import { ActivityIndicator, Button, Spacer } from "@react-native-material/core";
import { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { useAuth } from "./AuthContext";

const Login = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const { login, isAuthenticated, loginError, loginErrorMessage } = useAuth();
    const { setIsLoading, isLoading } = useAppStore();
    const persistentStore = usePersistentStore();
    const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

    function validateForm({ username, password }: { username: string, password: string }): Record<string, string> {
        let errors: Record<string, string> = {};
        if (username.trim() == '' || username == '') {
            errors['username'] = 'Username field is required'
        }

        if (password.trim() == '' || password == '') {
            errors['password'] = 'Password field is required'
        }

        return errors;
    };
    const validateAndLoginAccount = (username: string, password: string) => {

        const errors = validateForm({ username, password });
        setFieldErrors(errors);
        if (Object.keys(errors).length == 0) {
            login(username, password);
        }
        return;
    };

    function handleUsernameInput(username: string) {
        const errors = validateForm({ username, password });
        setFieldErrors(errors);
        setUsername(username);
    }

    function handlePasswordInput(password: string) {
        const errors = validateForm({ username, password });
        setFieldErrors(errors);
        setPassword(password);
    }

    return (
        <>
            <StatusBar barStyle={"light-content"} backgroundColor={styles.container.backgroundColor} translucent />
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.inputContainer}>
                        <ThemedTextInput style={{ borderColor: 'red !important' }} editable={!isLoading} label="username" value={username} onChangeText={handleUsernameInput} />
                        {
                            fieldErrors.username && !loginError && <Text style={{ fontWeight: 300, fontSize: 12, color: Colors.light.errorColor }}>{fieldErrors.username}</Text>
                        }
                        <ThemedTextInput editable={!isLoading} label="password" value={password} onChangeText={handlePasswordInput} />
                        {
                            fieldErrors.password && !loginError && <Text style={{ fontWeight: 300, fontSize: 12, color: Colors.light.errorColor }}>{fieldErrors.password}</Text>
                        }
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
                            {
                                loginErrorMessage && isLoading == false && <Text style={{ fontSize: 16, color: Colors.light.errorColor, fontWeight: "normal", textAlign: 'center', paddingVertical: 4 }}>{loginErrorMessage}</Text>
                            }
                        </View>
                        <Button contentContainerStyle={{ height: 42 }} disabled={isLoading} onPress={() => validateAndLoginAccount(username, password)} title="Login" variant="contained" color="#0b9aa9ff" titleStyle={{ color: "white", fontSize: 16 }} />
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
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        backgroundColor: Colors.mainAppColor,
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
        width: "75%",
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
