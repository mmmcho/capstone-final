(function() {
  "use strict";

  angular
      .module("spa-demo.subjects")
      .component("sdTypesSearch", {
        templateUrl: typesSearchTemplateUrl,
        controller: TypesSearchController
      });

  typesSearchTemplateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
  function typesSearchTemplateUrl(APP_CONFIG) {
    return APP_CONFIG.types_search_html;
  }

  TypesSearchController.$inject = ["$scope", "spa-demo.types.currentTypes"];
  function TypesSearchController($scope, currentTypes) {
    var vm = this;
    vm.typeSearch = currentTypes.typeSearch;
    vm.search = search;
    vm.clearSearch = clearSearch;
    vm.$onInit = function () {
      console.log("CurrentSubjectsMapController", $scope);
    };

    return;

    function search(){
      var type = vm.typeSearch.trim();
      currentTypes.search(type);
    }

    function clearSearch(){
      vm.typeSearch = '';
      currentTypes.search(vm.typeSearch);
    }
  }

})();
