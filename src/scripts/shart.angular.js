;(function(window, undefined) {
/* globals angular, Shart */

angular.module('shart', [])

.directive('shartPie', function() {
  return {
    restrict: 'E',

    scope: {
      data: '=',
      width: '=',
      height: '='
    },

    link: function($scope, $element) {
      Shart.Pie($element[0], $scope.data, {
        width: $scope.width,
        height: $scope.height
      });
    }
  };
})

.directive('shartDonut', function() {
  return {
    restrict: 'E',

    scope: {
      data: '=',
      label: '@',
      labelPosition: '@',
      value: '=',
      size: '=',
      type: '@'
    },

    link: function($scope, $element) {
      Shart.Donut($element[0], $scope.data, {
        class_name: $scope.type || false,
        label: $scope.label,
        label_position: $scope.labelPosition,
        value: $scope.value,
        size: $scope.size
      });
    }
  };
})

.directive('shartDonutStack', function() {
  return {
    restrict: 'E',

    scope: {
      data: '=',
      total: '=',
      labelSubtext: '@',
      thickness: '=',
    },

    link: function($scope, $element) {
      Shart.DonutStack($element[0], $scope.data, {
        total: $scope.total,
        label_subtext: $scope.labelSubtext,
        thickness: $scope.thickness
      });
    }
  };
})

.directive('shartHorizontalBar', function() {
  return {
    restrict: 'E',

    scope: {
      data: '=',
      percentages: '='
    },

    link: function($scope, $element) {
      Shart.HorizontalBar($element[0], $scope.data, {
        percentages: $scope.percentages
      });
    }
  };
})

.directive('shartPipeline', function() {
  return {
    restrict: 'E',

    scope: {
      data: '='
    },

    link: function($scope, $element) {
      // TODO: opts { colors, tooltip, formatter }
      Shart.Pipeline($element[0], $scope.data, {});
    }
  };
})

;

})(window);
