'use strict';

angular.
  module('core.agent').
  factory('Agent', ['$resource',
    function($resource) {
      return $resource('json/:agentId.json', {}, {
        query1: {
          method: 'GET',
          params: {agentId: 'agent-list1'},
          isArray: true
        },
        query2: {
          method: 'GET',
          params: {agentId: 'agent-list2'},
          isArray: true
        },
        query3: {
          method: 'GET',
          params: {agentId: 'agent-list3'},
          isArray: true
        },
        query4: {
          method: 'GET',
          params: {agentId: 'agent-list4'},
          isArray: true
        },
        query5: {
          method: 'GET',
          params: {agentId: 'operation-type1'},
          isArray: true
        },
        query6: {
          method: 'GET',
          params: {agentId: 'operation-type2'},
          isArray: true
        }
        ,
        query7: {
          method: 'GET',
          params: {agentId: 'transaction-journal1'},
          isArray: true
        }
        ,
        query8: {
          method: 'GET',
          params: {agentId: 'transaction-journal2'},
          isArray: true
        }
      });
    }
  ]);
