import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import { Icon, RestaurantCard, RestaurantCardCover, Address, Info, Rating, Section, SectionEnd, Open } from "./restaurant-info-card.styles";



export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = "Hello world",
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = [
            "https://media.istockphoto.com/id/2186643009/photo/woman-in-the-kitchen-preparing-healthy-vegetables-in-plastic-airtight-food-containers.jpg?s=1024x1024&w=is&k=20&c=50hLc4aK79tarZ_SoDa7oHnRYkH9VsAQUtGBlufayEs=",
        ],
        address = "4th Hello world St.",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
        placeId,
    } = restaurant;
    const ratingArray = Array.from(new Array(Math.floor(rating)));
    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Text variant="label">{name}</Text>
                <Section>
                    <Rating>
                        {ratingArray.map((_, index) => (
                            <SvgXml key={`star-${placeId}-${index}`} xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant="error">
                                CLOSED TEMPORARILY
                            </Text>
                        )}
                        <Spacer position="left" size="large">
                            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                        </Spacer>
                        <Spacer position="left" size="large">
                            <Icon source={{ uri: icon }} />
                        </Spacer>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard >
    );
};