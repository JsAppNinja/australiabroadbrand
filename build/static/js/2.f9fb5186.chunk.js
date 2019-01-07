(window.webpackJsonp = window.webpackJsonp || []).push([
  [2],
  {
    217: function(n, t, e) {
      'use strict';
      e.r(t);
      var i = e(1),
        o = e.n(i),
        c = e(20),
        u = e(38);
      t.default = Object(c.connect)(function(n) {
        return { isAuthenticated: n.auth.isAuthenticated };
      }, null)(function(n) {
        return (
          console.log('render'),
          o.a.createElement(u.a, {
            id: 'login',
            title: 'Login',
            description: 'We need to log in to stuff.',
          })
        );
      });
    },
  },
]);
//# sourceMappingURL=2.f9fb5186.chunk.js.map
