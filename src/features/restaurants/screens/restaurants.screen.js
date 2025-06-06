import React from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.components';


const isAndroid = Platform.OS === 'android';

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight || 0}px` : '0'};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
    <ExpoStatusBar style="auto" />
  </SafeArea>
);