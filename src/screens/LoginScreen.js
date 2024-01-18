import { useEffect, useState } from "react";
import {
    View,
    TextInput,
    StyleSheet,
    KeyboardAvoidingView,
    Text,
    Platform,
    Keyboard,
    TouchableWithoutFeedback,
    ActivityIndicator
} from "react-native";
import Button from '../components/Button';
import { globalStyles } from "../styles/global";
import API from "../API";
import ExitIco from '../../assets/exit.svg'

const LoginScreen = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);

    const [eventID, setEventID] = useState("");
    const [controllerID, setControllerID] = useState("");
    const [baseApiURL, setBaseApiURL] = useState(API.defaults.baseURL);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let errors = {};

        if (!eventID) errors.eventID = "eventID is required";
        if (!controllerID) errors.controllerID = "controllerID is required";
        if (!baseApiURL) errors.baseApiURL = "Base Api URL is required";

        setErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            console.log("Submitted", eventID, controllerID);
            setIsLoading(true);
            API.defaults.baseURL = baseApiURL;

            await API.get('login', {
                params: {
                    event: eventID,
                    controllerID: controllerID,
                }
            })
                .then(await new Promise((resolve) => { setTimeout(resolve, 3000) }))
                .then(response => {
                    if (!response.data.Status) {
                        alert('Format of response is incorrect:\n' + response.data);
                    }
                    if (response.data.Status == 1) {
                        navigation.navigate('ScannerScreen');
                    } else {
                        alert('Incorrect Event ID / Controller ID');
                    }
                }).catch(error => alert(error.message));

            navigation.navigate('HomeScreen');
            setIsLoading(false);
            setEventID('');
            setControllerID('');
            setErrors({});
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <KeyboardAvoidingView
                keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
                style={[globalStyles.container, styles.container]}
            >
                <View style={styles.form}>
                    <Text style={globalStyles.label}>Event ID</Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Enter your Event ID"
                        value={eventID}
                        onChangeText={setEventID}
                    />
                    {errors.eventID ? (<Text style={styles.errorText}>{errors.eventID}</Text>) : null}

                    <Text style={globalStyles.label}>Controller ID</Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Enter your Controller ID"
                        value={controllerID}
                        onChangeText={setControllerID}
                    />
                    {errors.controllerID ? (<Text style={styles.errorText}>{errors.controllerID}</Text>) : null}

                    <Text style={globalStyles.label}>API URL</Text>
                    <TextInput
                        style={globalStyles.input}
                        placeholder="Enter your API URL"
                        defaultValue={baseApiURL}
                        value={baseApiURL}
                        onChangeText={setBaseApiURL}
                    />
                    {errors.baseApiURL ? (<Text style={styles.errorText}>{errors.baseApiURL}</Text>) : null}

                    <Button style={styles.button} title="GO" loading={isLoading} onPress={handleSubmit} iconLeft={(<ExitIco fill='white' style={{ padding: 10, height: 25, width: 25, marginRight: 5 }} />)} />
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
    },
    errorText: {
        color: "red",
        marginBottom: 10,
    },
    button: {
        alignSelf: 'center',
        maxWidth: 200,
        width: '100%'
    },
});

export default LoginScreen;