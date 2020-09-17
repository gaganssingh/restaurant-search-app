import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SearchBar = () => {
    return (
        <View style={styles.backgroundStyle}>
            <Ionicons style={styles.iconStyles} name="ios-search" />
            <TextInput style={styles.inputStyle} placeholder="Search" />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: "#e5e6e4",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyles: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15,
    },
});

export default SearchBar;
