import React from "react";
import styled from "styled-components/native";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary}; 
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Title = styled(Text)`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.title};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled(Text)`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.body};

`;

const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
    flex-direction: row;
    padding-top: ${(props) => props.theme.space[2]};
    padding-bottom: ${(props) => props.theme.space[2]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Hello world",
        icon,
        photos = [
            "https://media.istockphoto.com/id/2186643009/photo/woman-in-the-kitchen-preparing-healthy-vegetables-in-plastic-airtight-food-containers.jpg?s=1024x1024&w=is&k=20&c=50hLc4aK79tarZ_SoDa7oHnRYkH9VsAQUtGBlufayEs=",
        ],
        address = "4th Hello world St.",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;
    const ratingArray = Array.from(new Array(Math.floor(rating)));
    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Rating>
                    {ratingArray.map(() => (
                        <SvgXml xml={star} width={20} height={20} />
                    ))};
                </Rating>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard >
    );
};