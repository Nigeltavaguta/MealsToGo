import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
    ckground-color: ${(props) => props.theme.colors.bg.primary}; 
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    padding: ${(props) => props.theme.space[3]};
    color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Hello world",
        icon,
        photos = [
            "https://media.istockphoto.com/id/2186643009/photo/woman-in-the-kitchen-preparing-healthy-vegetables-in-plastic-airtight-food-containers.jpg?s=1024x1024&w=is&k=20&c=50hLc4aK79tarZ_SoDa7oHnRYkH9VsAQUtGBlufayEs=",
        ],
        address = "Hello world",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </RestaurantCard>
    );
};