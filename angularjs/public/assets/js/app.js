angular.module("app",["app.configs","app.directives","app.filters"]),angular.module("app.configs",[]),angular.module("app.directives",[]).directive("icheck",function(){var e={restrict:"EA",link:function(e,a,i){var r={checkboxClass:"icheckbox_square-yellow",radioClass:"iradio_square-yellow",increaseArea:"20%"};angular.element(document).ready(function(){e.$icheck=$(a).iCheck(r)})}};return e}),angular.module("app.filters",[]);