import React, { useContext } from 'react';
import { SafeAreaView, StatusBar, Platform, FlatList } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';
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

export const RestaurantsScreen = () => {
  const restaurantsContext = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantList
        data={restaurantsContext.restaurants}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />
      <ExpoStatusBar style="auto" />
    </SafeArea >
  )
};