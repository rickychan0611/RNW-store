import React, {useContext} from 'react';
import { StyleSheet, Platform, Button } from 'react-native';
import PropTypes from 'prop-types';
import {
  Text,
  Row,
  View,
  Column,
  // Button,
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
import { Context } from '../context/Context';

const styles = StyleSheet.create({
  row: {
    position: Platform.OS === 'web' ? 'fixed' : 'absolute',
    zIndex: 1000,
    paddingTop: Platform.OS === 'web' ? 10 : 30,
    paddingBottom: Platform.OS === 'web' ? 5 : 4,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOpacity: 0.30,
    shadowRadius: 10,
    elevation: 6,
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
  // if (user.role === 'VISITOR') {
  if (true) {
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
  const { leftOpen, setLeftOpen } = useContext(Context);
  return (
    <Row style={styles.row} className="Header__row">

      <Container type="limited">

        <Column xs={6} style={styles.leftColumn}>
          <Text type="navy" auto style={styles.logo}>
            Tin Tin
          </Text>
        </Column>

        <Column xs={6} style={styles.rightColumn}>
          <View style={styles.menuRow}>
            {screen.reduced ? (
              <>
              <Button title="menu" onPress={()=>{
                setLeftOpen(!leftOpen)
                }} />
                </>
            ) : (
                <>
                {/* nav for web */}
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

export default Header;
