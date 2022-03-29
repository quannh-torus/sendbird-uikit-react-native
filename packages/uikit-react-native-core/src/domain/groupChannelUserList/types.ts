import type React from 'react';
import type Sendbird from 'sendbird';

import type { UseUserListOptions } from '@sendbird/chat-react-hooks';
import type { BaseHeaderProps } from '@sendbird/uikit-react-native-foundation';

import type { CommonComponent } from '../../types';
import type { UserListProps } from '../userList/types';

export type GroupChannelCreateFragment<User> = React.FC<{
  Header?: null | CommonComponent<
    BaseHeaderProps<{
      title: string;
      right: React.ReactElement;
      onPressRight?: () => void;
      left: React.ReactElement;
      onPressLeft: () => void;
    }>
  >;

  userIdsGenerator?: (users: User[]) => UserIds;
  onPressHeaderLeft: () => void;
  onBeforeCreateChannel?: (
    params: Sendbird.GroupChannelParams,
    users: User[],
  ) => Sendbird.GroupChannelParams | Promise<Sendbird.GroupChannelParams>;
  onCreateChannel: (channel: Sendbird.GroupChannel) => void;
  sortComparator?: UseUserListOptions<User>['sortComparator'];
  queryCreator?: UseUserListOptions<User>['queryCreator'];
  renderUser?: UserListProps<User>['List']['renderUser'];
}>;

type UserIds = string[];
export type GroupChannelInviteFragment<User> = React.FC<{
  Header?: null | CommonComponent<
    BaseHeaderProps<{
      title: string;
      right: React.ReactElement;
      onPressRight?: () => void;
      left: React.ReactElement;
      onPressLeft: () => void;
    }>
  >;

  channel: Sendbird.GroupChannel;
  userIdsGenerator?: (users: User[]) => UserIds;
  onPressHeaderLeft: () => void;
  onInviteMembers: (channel: Sendbird.GroupChannel) => void;
  sortComparator?: UseUserListOptions<User>['sortComparator'];
  queryCreator?: UseUserListOptions<User>['queryCreator'];
  renderUser?: UserListProps<User>['List']['renderUser'];
}>;
