import React from 'react';
import styled from 'styled-components/native';
import { SafeAreaView, StatusBar, Platform } from 'react-native';


const isAndroid = Platform.OS === 'android';

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight || 0}px` : '0'};
`;