import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';


const Router = require('dva/router').routerRedux.ConnectedRouter;

const routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/account",
        "exact": true,
        "component": require('../account/index.js').default,
        "_title": "EarlyWarningSystem",
        "_title_default": "EarlyWarningSystem"
      },
      {
        "path": "/account_behavior",
        "exact": true,
        "component": require('../account_behavior/index.js').default,
        "_title": "EarlyWarningSystem",
        "_title_default": "EarlyWarningSystem"
      },
      {
        "path": "/assist_group",
        "exact": true,
        "component": require('../assist_group/index.js').default,
        "_title": "EarlyWarningSystem",
        "_title_default": "EarlyWarningSystem"
      },
      {
        "path": "/dept",
        "exact": true,
        "component": require('../dept/index.js').default,
        "_title": "EarlyWarningSystem",
        "_title_default": "EarlyWarningSystem"
      },
      {
        "path": "/entity_relationship",
        "exact": true,
        "component": require('../entity_relationship/index.js').default,
        "_title": "EarlyWarningSystem",
        "_title_default": "EarlyWarningSystem"
      },
      {
        "path": "/event_analysis",
        "exact": true,
        "component": require('../event_analysis/index.js').default,
        "_title": "EarlyWarningSystem",
        "_title_default": "EarlyWarningSystem"
      },
      {
        "path": "/function",
        "exact": true,
        "component": require('../function/index.js').default,
        "_title": "EarlyWarningSystem",
        "_title_default": "EarlyWarningSystem"
      },
      {
        "path": "/group",
        "exact": true,
        "component": require('../group/index.js').default,
        "_title": "EarlyWarningSystem",
        "_title_default": "EarlyWarningSystem"
      },
      {
        "path": "/group_characteristics",
        "exact": true,
        "component": require('../group_characteristics/index.js').default,
        "_title": "EarlyWarningSystem",
        "_title_default": "EarlyWarningSystem"
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default,
        "_title": "EarlyWarningSystem",
        "_title_default": "EarlyWarningSystem"
      },
      {
        "path": "/info_search",
        "exact": true,
        "component": require('../info_search/index.js').default,
        "_title": "EarlyWarningSystem",
        "_title_default": "EarlyWarningSystem"
      },
      {
        "path": "/key_word",
        "exact": true,
        "component": require('../key_word/index.js').default,
        "_title": "EarlyWarningSystem",
        "_title_default": "EarlyWarningSystem"
      },
      {
        "path": "/list",
        "exact": true,
        "component": require('../list/index.js').default,
        "_title": "EarlyWarningSystem",
        "_title_default": "EarlyWarningSystem"
      },
      {
        "path": "/log",
        "exact": true,
        "component": require('../log/index.js').default,
        "_title": "EarlyWarningSystem",
        "_title_default": "EarlyWarningSystem"
      },
      {
        "path": "/operation",
        "exact": true,
        "component": require('../operation/index.js').default,
        "_title": "EarlyWarningSystem",
        "_title_default": "EarlyWarningSystem"
      },
      {
        "path": "/role",
        "exact": true,
        "component": require('../role/index.js').default,
        "_title": "EarlyWarningSystem",
        "_title_default": "EarlyWarningSystem"
      },
      {
        "path": "/user",
        "exact": true,
        "component": require('../user/index.js').default,
        "_title": "EarlyWarningSystem",
        "_title_default": "EarlyWarningSystem"
      },
      {
        "component": () => React.createElement(require('C:/Users/ChenYongKun/Desktop/EarlyWarningSystem/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
        "_title": "EarlyWarningSystem",
        "_title_default": "EarlyWarningSystem"
      }
    ],
    "_title": "EarlyWarningSystem",
    "_title_default": "EarlyWarningSystem"
  },
  {
    "component": () => React.createElement(require('C:/Users/ChenYongKun/Desktop/EarlyWarningSystem/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: false }),
    "_title": "EarlyWarningSystem",
    "_title_default": "EarlyWarningSystem"
  }
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

// route change handler
function routeChangeHandler(location, action) {
  plugins.applyForEach('onRouteChange', {
    initialValue: {
      routes,
      location,
      action,
    },
  });
}
history.listen(routeChangeHandler);
routeChangeHandler(history.location);

export { routes };

export default function RouterWrapper(props = {}) {
  return (
<Router history={history}>
      { renderRoutes(routes, props) }
    </Router>
  );
}
