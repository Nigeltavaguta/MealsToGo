import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
    const {
        name = 'Hello world',
        icon,
        photos = ["https://media.istockphoto.com/id/2186643009/photo/woman-in-the-kitchen-preparing-healthy-vegetables-in-plastic-airtight-food-containers.jpg?s=1024x1024&w=is&k=20&c=50hLc4aK79tarZ_SoDa7oHnRYkH9VsAQUtGBlufayEs="],
        address = 'Hello world',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;
    return (
        <Card elevation={5} style={styles.card}>
            <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
            <Text style={styles.title}>{name}</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: { backgroundColor: 'white' },
    cover: { padding: 20, backgroundColor: 'white' },
    title: { padding: 16 }
})