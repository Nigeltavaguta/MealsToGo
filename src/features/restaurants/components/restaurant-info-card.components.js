import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
   
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled(Text)`
  padding: 16px;
  color: black;
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