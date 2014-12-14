var User = [{"id":"3857","Username":"John Jimmy", "Accountids":["3857000", "3857001", "3857002", "3857003"]},{"id":"5603","Username":"Jane Smith", 

"Accountids":["5603000", "5603001"]},{"id":"8094","Username":"Jack Black", "Accountids":["8094000", "8094001"]}];

var Account = [ 
    {"id":"3857000","Accountname":"JD000"},
    {"id":"3857001","Accountname":"JD001"},
    {"id":"5603000","Accountname":"JS000"},
    {"id":"8094000","Accountname":"JB000"},
    {"id":"8094001","Accountname":"JB001"}
    
    
    ] ;
    
  

function findAccounts(User, Account){
var out=[];

User.filter(function(x){   
    return x.Accountids.filter(function(z){          
          return Account.some(function(y){         
       if(z == y.id){ out.push(y.Accountname + "-" +x.Username);}     
    });
    
    });
    });
    
    return out;
   
}
console.log(findAccounts(User, Account));


/*

OUTPUT
[ 'JD000-John Jimmy',
  'JD001-John Jimmy',
  'JS000-Jane Smith',
  'JB000-Jack Black',
  'JB001-Jack Black' ]

*/