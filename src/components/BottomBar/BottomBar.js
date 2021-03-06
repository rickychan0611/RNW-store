import React, {useContext} from "react";
import { Text, View, StyleSheet, TouchableOpacity, Platform } from "react-native";
// import { Link, useRouting } from "expo-next-react-navigation";
import Elevations from 'react-native-elevation'
import useQty from '../../hooks/useQty';
import getUrl from '../../utils/getUrl';
import { useHistory } from 'react-router';

import styled from 'styled-components/native';
import { Badge, Icon, withBadge } from 'react-native-elements'
import { Context } from "../../context/Context";

export default function BottomBar() {
  const { selected, setSelected } = useContext(Context);
  // const { navigate } = useRouting();
  const history = useHistory();
  const qty = useQty();

  const BadgedIcon = qty > 0 ? withBadge(qty)(Icon) : Icon

    return (
    <>
      <Wrapper style={Elevations[6]} position={Platform.OS === "web" ? "fixed" : "absolute"}>
        <ContentArea>
          <Button onPress={() => {
            setSelected("home")
            history.push("login")
          }}>
            <Icon
              name='home'
              type='font-awesome-5'
              color={selected==="home" ? 'black' : '#ababab'}
            />
            <Name selected={selected==="home" ? 'black' : '#ababab'}>Home</Name>
          </Button>

          <Button>
            <Icon
              name='star'
              type='font-awesome-5'
              color={selected==="star" ? 'black' : '#ababab'}
            />
            <Name selected={selected==="star" ? 'black' : '#ababab'}>Special</Name>
          </Button>

          <Button onPress={() => {
            setSelected("store")
            history.push("store")

          }}>

            <Icon
              name='store'
              type='font-awesome-5'
              color={selected==="store" ? 'black' : '#ababab'}
            />
            <Name selected={selected==="store" ? 'black' : '#ababab'}>Shop</Name>
          </Button>

          <Button onPress={() => {
            setSelected("cart")
            history.push("cart")

          }}>

            <BadgedIcon 
              name='shopping-cart'
              type='font-awesome-5'
              color={selected==="cart" ? 'black' : '#ababab'}
            />
            <Name selected={selected==="cart" ? 'black' : '#ababab'}>Cart</Name>
          </Button>

          <Button onPress={() => {
            setSelected("user")
            history.push("login")

          }}>
            <Icon
              name='user-circle'
              type='font-awesome-5'
              color={selected==="user" ? 'black' : '#ababab'}
            />
            <Name selected={selected==="user" ? 'black' : '#ababab'}>Me</Name>
          </Button>
        </ContentArea>
      </Wrapper >
    </>
  )
};

const Name = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: ${props => props.selected}
`;
const Button = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.View`
  position: ${props => props.position};
  bottom: 0;
  z-index: 1000;
  height: 65px;
  width: 100%;
  flex: 1;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  background-color: white;
`;
const ContentArea = styled.View`
  position: absolute;
  bottom: 0;
  height: 60px;
  width: 100%;
  max-width: 500px;
  flex: 1;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  /* margin-bottom: 3px; */
`;