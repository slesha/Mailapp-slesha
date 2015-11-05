/**
 * Created by kiran on 8/19/2015.
 */
app.filter('filterByCategory',[function(){
    return function(emails,searchCritieria){
        var filteredEmails=[];
        if(searchCritieria==''||searchCritieria==undefined){
            return emails;
        }
        else{
            angular.forEach(emails,function(email){
                if(email.category===searchCritieria){
                    filteredEmails.push(email);
                }
                else if(email.starred===searchCritieria && email.starred==="starred"){
                    filteredEmails.push(email);
                }
                else if(email.importantTag===searchCritieria && email.importantTag==="important"){
                    filteredEmails.push(email);
                }
            });
            return filteredEmails;
        }
    }
}]);