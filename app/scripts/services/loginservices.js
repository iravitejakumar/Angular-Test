angular.module('angularTestApp')

.service('LoginService', function($q,$http) {
var oUserData={};
    function setUserDetails(name, pw) {
           // $http.get("data/data.json").success(function(data) {
             //  console.log(data);
               oUserData.username=name;
               oUserData.password=pw;
               console.log(oUserData);
           // });
        }
         
    return {
        loginUser: function(name, pw) {
            console.log('iam fine');
            var deferred = $q.defer();
            var promise = deferred.promise;
            if (name == 'user' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        },
       
        getUserDetails:function(){
            console.log(oUserData.username);
           return {
            uname: oUserData.username,
            pwd:oUserData.password
           };
        },
         setUserDetails:setUserDetails,
         removeInfo:function(){
            oUserData={};
         }
    }
})
