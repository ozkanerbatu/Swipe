import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import UserCard from './UserCard'

const Card = (props) => {
    return (
        <View style={{  }} >
            <UserCard
                image={props.card.user_1_photo_link}
                name={props.card.user_1_full_name}
                up
            />
            <View style={{ height: 5 }}></View>
            <UserCard
                image={props.card.user_2_photo_link}
                name={props.card.user_2_full_name}
            />
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
})