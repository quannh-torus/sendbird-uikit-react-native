/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
} from "@storybook/react-native";

import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));

const getStories = () => {
  return [
    require("../stories/Avatar.stories.tsx"),
    require("../stories/Badge.stories.tsx"),
    require("../stories/Button.stories.tsx"),
    require("../stories/Dialog.stories.tsx"),
    require("../stories/GroupChannelPreview.stories.tsx"),
    require("../stories/Icon.stories.tsx"),
    require("../stories/Placeholder.stories.tsx"),
    require("../stories/Switch.stories.tsx"),
    require("../stories/Text.stories.tsx"),
  ];
};

configure(getStories, module, false);
