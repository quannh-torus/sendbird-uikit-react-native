import React, { ReactElement } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import Text from '../../components/Text';
import useUIKitTheme from '../../theme/useUIKitTheme';

const DEFAULT_MAX = 3;
const DEFAULT_BORDER_WIDTH = 2;
const DEFAULT_AVATAR_GAP = -4;
const DEFAULT_AVATAR_SIZE = 26;
const DEFAULT_REMAINS_MAX = 99;

type Props = React.PropsWithChildren<{
  size?: number;
  containerStyle?: StyleProp<ViewStyle>;
  maxAvatar?: number;
  avatarGap?: number;
  styles?: {
    borderWidth?: number;
    borderColor?: string;
  };
}>;

const AvatarStack = ({
  children,
  containerStyle,
  styles,
  maxAvatar = DEFAULT_MAX,
  size = DEFAULT_AVATAR_SIZE,
  avatarGap = DEFAULT_AVATAR_GAP,
}: Props) => {
  const { colors, palette } = useUIKitTheme();
  const defaultStyles = { borderWidth: DEFAULT_BORDER_WIDTH, borderColor: colors.background };
  const avatarStyles = { ...defaultStyles, ...styles };

  const childrenArray = React.Children.toArray(children).filter((it) => React.isValidElement(it));
  const remains = childrenArray.length - maxAvatar;
  const shouldRenderRemains = remains > 0;

  const actualGap = avatarGap - avatarStyles.borderWidth;

  const renderAvatars = () => {
    return childrenArray.slice(0, maxAvatar).map((child, index) =>
      React.cloneElement(child as ReactElement, {
        size,
        containerStyle: {
          left: actualGap * index,
          borderWidth: avatarStyles.borderWidth,
          borderColor: avatarStyles.borderColor,
        },
      }),
    );
  };

  const renderRemainsCount = () => {
    if (!shouldRenderRemains) return null;
    return (
      <View
        style={[
          avatarStyles,
          {
            left: actualGap * maxAvatar,
            width: size,
            height: size,
            borderRadius: size / 2,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: palette.background100,
          },
        ]}
      >
        <Text style={{ color: colors.onBackground02, fontSize: 8 }} caption4>
          {`+${Math.min(remains, DEFAULT_REMAINS_MAX)}`}
        </Text>
      </View>
    );
  };

  const calculateWidth = () => {
    const widthEach = size + actualGap;
    const avatarCountOffset = shouldRenderRemains ? 1 : 0;
    const avatarCount = shouldRenderRemains ? maxAvatar : childrenArray.length;
    const count = avatarCount + avatarCountOffset;
    return widthEach * count - actualGap;
  };

  return (
    <View style={[containerStyle, { flexDirection: 'row', width: calculateWidth() }]}>
      {renderAvatars()}
      {renderRemainsCount()}
    </View>
  );
};

export default AvatarStack;
