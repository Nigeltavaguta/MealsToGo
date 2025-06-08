import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { SafeArea } from './src/components/utility/safe-area.component';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: { active: 'restaurant', inactive: 'restaurant-outline' },
  Settings: { active: 'settings', inactive: 'settings-outline' },
  Map: { active: 'map', inactive: 'map-outline' },
};

const createScreenOptions = ({ route }) => {
  return {
    tabBarIcon: ({ focused, color, size }) => {
      const iconSet = TAB_ICON[route.name];
      const iconName = focused ? iconSet.active : iconSet.inactive;
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    headerShown: false,
  };
};

const Settings = () => <SafeArea><Text>Settings Screen</Text></SafeArea>;
const Map = () => <SafeArea><Text>Map Screen</Text></SafeArea>;

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={createScreenOptions}>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}