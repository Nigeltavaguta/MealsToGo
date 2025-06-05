import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, StatusBar, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.components';

const SafeArea = styled(SafeAreaView)`
    flex: 1;
    margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
    padding:16px;
`;

const RestaurantListContainer = styled.View`
    flex:1;
    padding: 16px;
    background-color:blue;

`;

export const RestaurantsScreen = () => (
    <SafeArea>
        <SearchContainer>
            <Searchbar placeholder="Search" />
        </SearchContainer>
        <RestaurantListContainer>
            <RestaurantInfoCard />
        </RestaurantListContainer>

    </SafeArea>
);
