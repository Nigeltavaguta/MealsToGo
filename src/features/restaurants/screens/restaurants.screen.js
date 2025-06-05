import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, StatusBar, Platform } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfo } from '../components/restaurant-info.components';

const isAndroid = Platform.OS === 'android';
export const RestaurantsScreen = () => (
    <SafeAreaView style={styles.container}>
        <View style={styles.search}>
            <Searchbar placeholder="Search" />
        </View>
        <View style={styles.listContainer}>
            <RestaurantInfo />
        </View>

    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: isAndroid ? StatusBar.currentHeight : 0,
    },
    search: {
        padding: 16,
    },
    listContainer: {
        flex: 1,
        padding: 16,
        backgroundColor: 'blue',
    },
    text: {
        color: 'white',
    },
});