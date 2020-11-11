import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  empty: {},
  defaults: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    minHeight: Platform.OS === 'web' ? '100vh' : '100%',
    width: '100%',
  },
});

const Layout = ({ style, children }) => (
  <View style={[styles.defaults, style]}>
    {children}
  </View>
);

export default Layout;
