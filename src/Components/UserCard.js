import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
const { width } = Dimensions.get("screen");
const UserCard = (props) => {
    return (
        <View style={styles.container} >
            <Image
                style={[styles.image, props.up ? styles.up : styles.down]}
                source={{ uri: "https://api.mevzu.app" + props.image }}
            />
            <View
                style={styles.textView}
            >
                <Text style={styles.text}>
                    {props.name}
                </Text>
            </View>
        </View>
    )
}

export default UserCard

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    image: {
        width: "100%",
        height: ((width - 25) * 723) / 964,
    },
    up: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    down: {
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    textView: {
        width: "100%",
        backgroundColor: "white,",
        position: "absolute",
        bottom: 5,
        padding: 10,
    }
})