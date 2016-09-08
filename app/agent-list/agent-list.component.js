'use strict';

 
angular.
 module('agentList' ).
  component('agentList',{
   templateUrl:'agent-list/agent-list.template.html', 
    controller: ['$http', function ($http){


 var self = this;
      $http.get('agent-list/agent-list.json').then(function(resp, status, headers, config) {
      	 console.log('This is data:', resp, '\n\n This is status:',status, '\n\n This is Headers:', headers, '\n\n This is Confog', config);
        self.agents = resp.data;
      });






//	this.sortFlag="firstname";
	this.sortFlag=undefined;
	this.sort= function (poleSort)
		{
		this.sortFlag= this.sortFlag==poleSort ? '-'+poleSort : poleSort;
		};

	this.upFlag= function (poleSort)
		{
		if (this.sortFlag==poleSort) return true;
		if (this.sortFlag=='-'+poleSort) return false;
		};

	this.deleteAgent=function(id)
		{
			var yes=false;
			yes=confirm('Вы действительно хотите удалить эту запись?');
			if (yes==true)
				for (var i = 0; i < this.agents.length; i++) {
 					if (this.agents[i].idagent==id) this.agents.splice(i, 1);
					}
		};

	this.addNewAgent=function()
		{
			var maxElement=0;
			for (var i = 0; i < this.agents.length; i++) {
 				if (this.agents[i].idagent>maxElement) maxElement=this.agents[i].idagent;
			
				}

			this.agents.push({
			idagent: +maxElement+1,
			firstname: 'none', 
			lastname: 'none',
			email: 'none',
			phone:'none',
			birthday:'none'
  			});
		this.proverka=this.agents.length;
		};
	
	 this.hide=false;
	 this.redactAgent=function(id)
		{
			this.hide=!this.hide;
			for (var i = 0; i < this.agents.length; i++) {
 				if (this.agents[i].idagent==id) this.agents[i].redact=!this.agents[i].redact;
			}
		}
			
} ]
});
