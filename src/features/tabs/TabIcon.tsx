import HomeFocused from '../../assets/icons/home_focused.png';
import SearchFocused from '../../assets/icons/search_focused.png';
import LibraryFocused from '../../assets/icons/library_focused.png';

import Home from '../../assets/icons/home.png';
import Search from '../../assets/icons/search.png';
import Library from '../../assets/icons/library.png';
import {Image, ImageStyle, TextStyle, View, ViewStyle} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors} from '../../utils/Constants';
import {FC} from 'react';

interface TabProps {
  name: string;
}
interface IconProps {
  focused: boolean;
}
const styles: ImageStyle = {
  width: RFValue(18),
  height: RFValue(18),
};
const tabStyles: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};
const textStyleInactive: TextStyle = {
  textAlign: 'center',
  marginTop: 4,
  color: Colors.inactive,
  fontSize: RFValue(9.5),
};
const textStyleActive: TextStyle = {
  textAlign: 'center',
  marginTop: 4,
  color: Colors.text,
  fontSize: RFValue(9.5),
};

const TabIcon: FC<TabProps> = ({name}) => {
  return (
    <View style={tabStyles}>
      <Image
        source={name === 'Home' ? Home : name === 'Search' ? Search : Library}
        style={[styles]}
      />
    </View>
  );
};

const TabIconFocused: FC<TabProps> = ({name}) => {
  return (
    <View style={tabStyles}>
      <Image
        source={
          name === 'Home'
            ? HomeFocused
            : name === 'Search'
            ? SearchFocused
            : LibraryFocused
        }
        style={[styles]}
      />
    </View>
  );
};

export const HomeTabIcon: FC<IconProps> = ({focused}) => {
  return focused ? <TabIconFocused name="Home" /> : <TabIcon name="Home" />;
};
export const LibraryIcon: FC<IconProps> = ({focused}) => {
  return focused ? (
    <TabIconFocused name="Library" />
  ) : (
    <TabIcon name="Library" />
  );
};
export const SearchTabIcon: FC<IconProps> = ({focused}) => {
  return focused ? <TabIconFocused name="Search" /> : <TabIcon name="Search" />;
};
