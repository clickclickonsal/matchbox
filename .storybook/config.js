import * as storybook from '@storybook/react';
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';

setOptions({
  name: 'Matchbox',
  url: 'https://github.com/SparkPost/matchbox/',
  hierarchySeparator: /\//,
  hierarchyRootSeparator: /\|/,
  // goFullScreen: false,
  // showStoriesPanel: true,
  // showAddonPanel: true,
  // showSearchBox: false,
  // addonPanelInRight: false,
  // sortStoriesByKind: false,
  // hierarchySeparator: null,
  // hierarchyRootSeparator: null,
  // sidebarAnimations: true,
  // selectedAddonPanel: undefined,
  // enableShortcuts: false, // true by default
});

// addon-info
setDefaults({
  header: false, // Toggles display of header with component name and description
  inline: true
});

const req = require.context('../stories', true, /\.stories\.js$/)
storybook.configure(() => req.keys().forEach((filename) => req(filename)), module);
