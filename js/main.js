// import '@pnotify/core/dist/BrightTheme.css';
// import './script';

import { alert, defaultModules } from '@pnotify/core';
import * as PNotifyMobile from '@pnotify/mobile';

defaultModules.set(PNotifyMobile, {});

alert({
  text: 'Notice me, senpai!',
});