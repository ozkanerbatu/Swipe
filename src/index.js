import {
    View,
    SafeAreaView,
    Platform,
    Image,
    TouchableOpacity,
    Text,
    StyleSheet,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { AntDesign, Entypo } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";
import UserServices from "./Components/UserServices";
import Card from "./Components/Card";


const Main = () => {
    const swipeRef = useRef();
    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        UserServices.getUsers().then(res => { setProfiles(res.meta_data) }).catch(err => { console.log(err); });
    }, [])
    const swipeLeft = async (cardIndex) => {
    };
    const swipeRight = async (cardIndex) => {
    };
    return (
        <SafeAreaView
            style={styles.container}
        >
            <View style={{ flex: 1 }}>
                <Swiper
                    ref={swipeRef}
                    stackSize={5}
                    cardIndex={0}
                    verticalSwipe={false}
                    onSwipedLeft={(cardIndex) => {
                        swipeLeft(cardIndex);
                    }}
                    onSwipedRight={(cardIndex) => {
                        swipeRight(cardIndex);
                    }}
                    overlayLabels={{
                        left: {
                            title: "NOPE",
                            style: {
                                label: {
                                    textAlign: "right",
                                    color: "red",
                                },
                            },
                        },
                        right: {
                            title: "MATCH",
                            style: {
                                label: {
                                    textAlign: "left",
                                    color: "#4DED31",
                                },
                            },
                        },
                    }}
                    animateCardOpacity
                    cards={profiles}
                    containerStyle={{
                        flex: 1,
                        backgroundColor: "white",
                    }}
                    renderCard={(card, id) =>
                        card ? (
                            <View style={styles.cardView} >
                                <Card card={card} />
                            </View>
                        ) : (
                            <View style={styles.noContentView}>
                                <Text>No more Profiles</Text>
                                <Image
                                    style={[{ height: 100, width: 100, alignSelf: "center" }]}
                                    source={{ uri: "https://links.papareact.com/6gb" }}
                                />
                            </View>
                        )
                    }
                />
                <View
                    style={[styles.buttonsContainer, { bottom: Platform.OS === "android" ? 55 : 35 },]}
                >
                    <TouchableOpacity
                        onPress={() => swipeRef.current.swipeLeft()}
                        style={styles.button}
                    >
                        <Entypo name="cross" size={30} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => swipeRef.current.swipeRight()}
                        style={styles.button}

                    >
                        <AntDesign name="heart" size={30} color="green" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        width: "100%",
    },
    button: {
        backgroundColor: "white",
        borderRadius: 100,
        padding: 25,
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    noContentView: {
        backgroundColor: "white",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        height: "95%",
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    cardView: {
        backgroundColor: "white",
        width: "100%",
        borderRadius: 10,
    },
    container: {
        backgroundColor: "white",
        flex: 1,
    }
});
export default Main;
