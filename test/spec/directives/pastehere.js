'use strict';

describe('Directive: pasteHere', function () {

  // load the directive's module
  beforeEach(module('cmdvApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<paste-here></paste-here>');
    element = $compile(element)(scope);
  }));

  it('should make hidden element visible', function () {
    debugger;
    expect(element.text()).toBe('this is the pasteHere directive');
  });

  it('should create a text input when pressing CMD key', function () {
    console.log(element);
  });

});
