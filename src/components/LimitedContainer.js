import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Platform } from 'react-native';
import { View, Container, StylePropType } from 'react-native-web-ui-components';
import { Helmet, style } from 'react-native-web-ui-components/Helmet';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: '100%',
  },
  container: {
    paddingTop: Platform.OS === 'web' ? 90 : 90,
    paddingBottom: 80,
  },
});

const LimitedContainer = ({ children, style: styleProp }) => (
  <>
    <Helmet>
      <style>
        {`
          @media (min-width: 992px) {
            [data-class~="LimitedContainer__view"] {
              padding-top: 60px;
            }
          }
        `}
      </style>
    </Helmet>
    <View style={styles.view} className="LimitedContainer__view">
      <Container
        type="limited"
        style={[styles.container, styleProp]}
      >
        {children}
      </Container>
    </View>
  </>
);

LimitedContainer.propTypes = {
  style: StylePropType,
  children: PropTypes.node,
};

LimitedContainer.defaultProps = {
  style: null,
  children: null,
};

export default LimitedContainer;
