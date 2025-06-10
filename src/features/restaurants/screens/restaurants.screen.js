import React, { useContext } from 'react';
import { SafeAreaView, StatusBar, Platform, FlatList } from 'react-native';
import { Searchbar, ActivityIndicator, Colors } from 'react-native-paper';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
import { View } from "react-native";
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurant.context';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const Loading = styled(ActivityIndicator)`
  marginLeft: -25px;
`;

const LoadingContainer = styled(View)`
  position:absolute;
  top: 50%;
  left: 50%;
`;


export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading
            animating={true}
            size={50}
          />
        </LoadingContainer>
      )}
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <RestaurantInfoCard restaurant={item} />
          );
        }}
        keyExtractor={(item) => item.name}
      />
      <ExpoStatusBar style="auto" />
    </SafeArea >
  )
};