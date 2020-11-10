import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';
import {
  Text,
  Row,
  View,
  Column,
  Button,
  Container,
} from 'react-native-web-ui-components';
import { useAmp } from 'react-native-web-ui-components/Amp';
import { useScreen } from 'react-native-web-ui-components/Screen';
import { Helmet, style } from 'react-native-web-ui-components/Helmet';
import { URL, API_URL } from '../config';
import getMenu from '../utils/getMenu';
import getUrl from '../utils/getUrl';
import Mustache from './Mustache';
import NavLink from './NavLink';

const styles = StyleSheet.create({
  row: {
    paddingTop: Platform.OS === 'web' ? 20 : 35,
    paddingBottom: Platform.OS === 'web' ? 20 : 15,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: "white"
  },
  leftColumn: {
    height: 50,
    justifyContent: 'center',
  },
  rightColumn: {
    height: 50,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  menuItem: {
    paddingRight: 15,
  },
  logo: {
    fontSize: 20,
    color: 'red'
  }
});

const Buttons = ({ user }) => {
  if (user.role === 'VISITOR') {
    return (
      <>
        <Button small to={getUrl('/login')}>
          Log In
        </Button>
        <Button small to={getUrl('/signup')}>
          Sign Up
        </Button>
      </>
    );
  }
  return (
    <Button small to={getUrl('/logout')}>
      Logout
    </Button>
  );
};

Buttons.propTypes = {
  user: PropTypes.shape().isRequired,
};

const Header = ({ user, openLeft }) => {
  const screen = useScreen();

  return (
    <Row style={styles.row} className="Header__row">

      <Container type="limited">

        <Column xs={6} style={styles.leftColumn}>
          <Text type="navy" auto style={styles.logo}>
            Tin Tin Food Wholesale
          </Text>
        </Column>

        <Column xs={6} style={styles.rightColumn}>
          <View style={styles.menuRow}>
            {screen.reduced ? (
              <Button small onPress={openLeft}>
                Menu button?
              </Button>
            ) : (
                <>
                  {getMenu().map(item => (
                    <NavLink
                      auto
                      exact
                      key={item.label}
                      type="lightGray"
                      activeType="gray"
                      className="Header_navLink"
                      style={styles.menuItem}
                      to={getUrl(item.url)}
                    >
                      {item.label}
                    </NavLink>
                  ))}

                  <Buttons user={user} />
                </>
              )}
          </View>
        </Column>
      </Container>
    </Row>
  );
};

Header.propTypes = {
  user: PropTypes.shape().isRequired,
  openLeft: PropTypes.func.isRequired,
};

export default Header;
