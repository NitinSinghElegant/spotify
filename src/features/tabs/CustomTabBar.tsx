import {View, Text, StyleSheet} from 'react-native';
import React, {FC} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {BOTTOM_TAB_HEIGHT, Colors} from '../../utils/Constants';
import Animated from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ScalePress from '../../components/ui/ScalePress';
import {HomeTabIcon, LibraryIcon, SearchTabIcon} from './TabIcon';

const CustomTabBar: FC<BottomTabBarProps> = props => {
  const {state, navigation} = props;
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <Animated.View
      style={[styles.tabBarContainer, {paddingBottom: safeAreaInsets.bottom}]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <ScalePress
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}>
            {route.name === 'Home' && <HomeTabIcon focused={isFocused} />}
            {route.name === 'Library' && <LibraryIcon focused={isFocused} />}
            {route.name === 'Search' && <SearchTabIcon focused={isFocused} />}
          </ScalePress>
        );
      })}
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: Colors.background,
    width: '100%',
    height: BOTTOM_TAB_HEIGHT,
    position: 'absolute',
    bottom: 0,
    paddingTop: 10,
    zIndex: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CustomTabBar;
