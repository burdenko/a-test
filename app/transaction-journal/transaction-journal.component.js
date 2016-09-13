'use strict';

angular.
 module('transactionJournal' ).
  component('transactionJournal',{
   templateUrl:'transaction-journal/transaction-journal.template.html', 
    controller: ['Agent', '$cookies', function (Agent, $cookies){
      
         
      if ( $cookies.get("sessionid") != "trusted" ) window.location.href = "/#!/login";      // Проверка авторизации

      this.inout = "Приход";
      
      this.logout = function() {                                                      //Выход из сессии
        var date2 = new Date(0)
        $cookies.put("sessionid", "trusted",  {'expires': date2.toUTCString()});
        window.location.href = "/#!/login";
      }
 
      var self = this;
      this.addNewJson = function addNewJson(name) {  // пагинация
        if (name == 1) {
         this.inout = "Приход";
         Agent.query7(function(data) { //подгружаем данные из 1 json файла
            self.transactions = data;
            for (var j = 0; j < self.transactions.length; j++) {                // Приводим дату рождения к типу Date
              self.transactions[j].datetransaction=new Date(self.transactions[j].datetransaction); 
            }
          });
        }
     
        if (name == 2) {
          this.inout = "Расход";
          this.addNewJson(6);
          Agent.query8(function(data) { //подгружаем данные из 2 json файла
            self.transactions = data;
            for (var j = 0; j < self.transactions.length; j++) {                
              self.transactions[j].datetransaction=new Date(self.transactions[j].datetransaction); 
            }
          });
        }
        if (name == 3) {
          this.kontragents = Agent.query1();
        }  
        if (name == 5) {
          this.operations = Agent.query5();
        }
        if (name = 6) {
          this.operations = Agent.query6();
        }

      }

      this.addNewJson(1); 
      this.addNewJson(3); 
      this.addNewJson(5);

      this.deleteTransaction=function(id) {               // удаляем запись
        var yes=false;
        yes=confirm('Вы действительно хотите удалить эту запись?');
        if ( yes == true )
          for (var i = 0; i < this.transactions.length; i++) {
            if (this.transactions[i] ==id) this.transactions.splice(i, 1);
          }
      };



      this.addNewTransaction=function() {                 // добавляем запись
        var maxElement = 0;

        for (var i = 0; i < this.transactions.length; i++) {
          if (+this.transactions[i].idtransaction>+maxElement) maxElement = +this.transactions[i].idtransaction;
        }

        this.transactions.push(
        {
          idtransaction: +maxElement+1,
          datetransaction: new Date("0000, 00"), 
          inout: this.inout,
          typeoperation:'',
          kontragent:'',
          sum:'',
          edit:false

        });
      };

      this.transformationDate=function(id) {           // приводим дату рождения к виду 01.01.2001
        if (id.getDate()){
          var dd = id.getDate();
          if (dd < 10) dd = '0' + dd;

          var mm = id.getMonth() + 1;  
          if (mm < 10) mm = '0' + mm;

          var yy = id.getFullYear();

          return dd + '.' + mm + '.' + yy;}
      };

      this.hide = false;

      this.editTransaction = function(id) {         // включаем редактирование записи
        this.hide = !this.hide;
        id.edit = !id.edit;
      }
    
    }]
  });

