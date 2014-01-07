(function() {
  goog.provide('gn_form_fields_directive');

  angular.module('gn_form_fields_directive', [
  ])
  .directive('groupsCombo', ['$http',
        function($http) {
          return {
            restrict: 'A',
            templateUrl: '../../catalog/components/search/formfields/' +
                'partials/groupsCombo.html',
            scope: {
              ownerGroup: '=',
              lang: '='
            },
            link: function(scope, element, attrs) {
              $http.get('admin.group.list@json').success(function(data) {
                scope.groups = data !== 'null' ? data : null;

                // Select by default the first group.
                if (scope.ownerGroup === '' && data) {
                  scope.ownerGroup = data[0]['id'];
                }
              });
            }
          };
        }])
  .directive('protocolsCombo', ['$http', 'gnSchemaManagerService',
        function($http, gnSchemaManagerService) {
          return {
            restrict: 'A',
            templateUrl: '../../catalog/components/search/formfields/' +
                'partials/protocolsCombo.html',
            scope: {
              protocol: '=',
              lang: '='
            },
            controller: ['$scope', '$translate', function($scope, $translate) {
              var config = 'iso19139|gmd:protocol|||';
              gnSchemaManagerService.getElementInfo(config).then(
                  function(data) {
                    $scope.protocols = data !== 'null' ?
                        data[0].helper.option : null;
                  });
            }]
          };
        }]);
})();
