import React from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.components';

const isAndroid = Platform.OS === 'android';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${isAndroid ? `padding-top: ${StatusBar.currentHeight || 24}px` : ''}; // Default to 24px if undefined
  background-color: #fff; // Ensure solid background
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: #fff; // Match SafeArea background
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: #fff; // Changed from blue for consistency
`;

export default function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
      <ExpoStatusBar style="auto" backgroundColor="#fff" />
    </SafeArea>
  );
}