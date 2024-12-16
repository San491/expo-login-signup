import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import styles from './indexStyle';
import {
    View,
    Text,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, Easing } from "react-native-reanimated";


const LoginRegisterScreen = () => {
    const [showLogin, setShowLogin] = useState(true);
    const [successMessage, setSuccessMessage] = useState("");
    const opacity = useSharedValue(1);
    const translateY = useSharedValue(0);

    const toggleForm = (resetErrors: () => void) => {
        setSuccessMessage("");
        resetErrors();

        // animation values
        opacity.value = withTiming(0, { duration: 100, easing: Easing.ease });
        translateY.value = withTiming(30, { duration: 100, easing: Easing.ease });
        // after the success message this will toggle the form
        setTimeout(() => {
            setShowLogin(!showLogin);
            opacity.value = withTiming(1, { duration: 100, easing: Easing.ease });
            translateY.value = withTiming(0, { duration: 100, easing: Easing.ease });
        }, 100);
    };

    const animatedStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value,
            transform: [{ translateY: translateY.value }],
        };
    });

    // validation with Yup
    const loginValidationSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required"),
    });

    const registerValidationSchema = Yup.object().shape({
        name: Yup.string().required("Full Name is required"),
        username: Yup.string().required("Username is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    });

    // on submit being successful
    const handleSuccess = (type: string) => {
        if (type === "login") {
            setSuccessMessage("You have successfully logged in.");
        } else if (type === "signup") {
            setSuccessMessage("You have successfully created an account. You can now login.");
            setTimeout(() => {
                toggleForm(() => { });
            }, 2000);
        }
        setTimeout(() => setSuccessMessage(""), 2000);
    };

    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior="padding" style={styles.avoidingView}>


                    <View style={styles.formContainer}>
                        <StatusBar backgroundColor="#050625" translucent={true} />
                        {successMessage ? (
                            <View style={styles.successBox}>
                                <Text style={styles.successText}>{successMessage}</Text>
                            </View>
                        ) : (
                            <Animated.View style={[animatedStyle]}>
                                {showLogin ? (
                                    <Formik
                                        initialValues={{ username: "", password: "" }}
                                        validationSchema={loginValidationSchema}
                                        onSubmit={(values) => {
                                            console.log("Logging in with:", values);
                                            handleSuccess("login");  // Show login success message
                                        }}
                                    >
                                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                                            <View>
                                                <Text style={styles.heading}>Login</Text>
                                                <Text style={styles.description}>
                                                    New user?{" "}
                                                    <Text style={styles.linkToggle} onPress={() => toggleForm(() => { })}>
                                                        Sign Up
                                                    </Text>
                                                </Text>
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder="Enter your username"
                                                    placeholderTextColor="#C0C0C0"
                                                    onChangeText={handleChange("username")}
                                                    onBlur={handleBlur("username")}
                                                    value={values.username}
                                                />
                                                {touched.username && errors.username && (
                                                    <Text style={styles.errorText}>{errors.username}</Text>
                                                )}
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder="Enter password"
                                                    placeholderTextColor="#C0C0C0"
                                                    secureTextEntry
                                                    onChangeText={handleChange("password")}
                                                    onBlur={handleBlur("password")}
                                                    value={values.password}
                                                />
                                                {touched.password && errors.password && (
                                                    <Text style={styles.errorText}>{errors.password}</Text>
                                                )}
                                                <TouchableOpacity style={styles.button} onPress={handleSubmit as any}>
                                                    <Text style={styles.buttonText}>Continue</Text>
                                                </TouchableOpacity>
                                            </View>
                                        )}
                                    </Formik>
                                ) : (
                                    <Formik
                                        initialValues={{ name: "", username: "", email: "", password: "" }}
                                        validationSchema={registerValidationSchema}
                                        onSubmit={(values) => {
                                            console.log("Registering with:", values);
                                            handleSuccess("signup");  // Show sign-up success message
                                        }}
                                    >
                                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, resetForm, setErrors }) => (
                                            <View>
                                                <Text style={styles.heading}>Sign Up</Text>
                                                <Text style={styles.description}>
                                                    Already have an account?{" "}
                                                    <Text style={styles.linkToggle} onPress={() => toggleForm(resetForm)}>
                                                        Login
                                                    </Text>
                                                </Text>
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder="Your full name"
                                                    placeholderTextColor="#C0C0C0"
                                                    onChangeText={handleChange("name")}
                                                    onBlur={handleBlur("name")}
                                                    value={values.name}
                                                />
                                                {touched.name && errors.name && (
                                                    <Text style={styles.errorText}>{errors.name}</Text>
                                                )}
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder="Enter a username"
                                                    placeholderTextColor="#C0C0C0"
                                                    onChangeText={handleChange("username")}
                                                    onBlur={handleBlur("username")}
                                                    value={values.username}
                                                />
                                                {touched.username && errors.username && (
                                                    <Text style={styles.errorText}>{errors.username}</Text>
                                                )}
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder="Enter your email address"
                                                    placeholderTextColor="#C0C0C0"
                                                    onChangeText={handleChange("email")}
                                                    onBlur={handleBlur("email")}
                                                    value={values.email}
                                                />
                                                {touched.email && errors.email && (
                                                    <Text style={styles.errorText}>{errors.email}</Text>
                                                )}
                                                <TextInput
                                                    style={styles.input}
                                                    placeholder="Enter password"
                                                    placeholderTextColor="#C0C0C0"
                                                    secureTextEntry
                                                    onChangeText={handleChange("password")}
                                                    onBlur={handleBlur("password")}
                                                    value={values.password}
                                                />
                                                {touched.password && errors.password && (
                                                    <Text style={styles.errorText}>{errors.password}</Text>
                                                )}
                                                <TouchableOpacity style={styles.button} onPress={handleSubmit as any}>
                                                    <Text style={styles.buttonText}>Continue</Text>
                                                </TouchableOpacity>
                                            </View>
                                        )}
                                    </Formik>
                                )}
                            </Animated.View>
                        )}
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </View>
    );
};


export default LoginRegisterScreen;
