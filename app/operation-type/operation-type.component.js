'use strict';

angular.
 module('operationType' ).
  component('operationType',{
   templateUrl:'operation-type/operation-type.template.html', 
    controller: ['Agent', '$cookies',  function (Agent, $cookies){
      
      if ($cookies.get("sessionid")!="trusted") window.location.href = "/#!/login";      // Проверка авторизации

      this.logout = function() {                                                      //Выход из сессии
        var date2 = new Date(0)
        $cookies.put("sessionid", "trusted",  {'expires': date2.toUTCString()});
        window.location.href = "/#!/login";
      }
 
      this.addNewJson = function addNewJson(name) {  
        if (name==1) this.operations = Agent.query5();
        if (name==2) this.operations = Agent.query6();
      }

      this.addNewJson(1); 

      this.deleteOperation=function(id) {               // удаляем запись
        var yes = false;
        yes = confirm('Вы действительно хотите удалить эту запись?');
        if (yes == true)
          for (var i = 0; i < this.operations.length; i++) {
            if (this.operations[i] == id) this.operations.splice(i, 1);
          }
      };


      this.addNewOperation=function() {                 // добавляем запись
        var maxElement=0;

        for (var i = 0; i < this.operations.length; i++) {
          if (+this.operations[i].idoperation > +maxElement) maxElement = +this.operations[i].idoperation;
        }

        this.operations.push(
        {
          idoperation: +maxElement+1,
          name: 'Новая операция', 
          edit:false
        });
      };

      this.editOperation=function(id) {         // включаем редактирование записи
        this.hide = !this.hide;
        id.edit = !id.edit;
      }

    }]
  });

