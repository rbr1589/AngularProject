app.controller("logInController", function ($scope, $state, $http) {

    var users = [];
    var passwordFoUsers = [];

    var lc = this;
    $scope.isUserLoggedIn = false;
    $scope.singUpClicked = false;
    $scope.singInClicked = false;


    $scope.signIn = function () {
        $scope.singInClicked = true;
        $scope.singUpClicked = false;
        lc.userId = "";
        lc.password = "";
    }

    $scope.signUp = function () {
        $scope.singUpClicked = true;
        $scope.singInClicked = false;
        lc.userId = "";
        lc.password = "";
        lc.matchPassword = "";
    }

    $scope.signOut = function () {
        $scope.isUserLoggedIn = false;
        $scope.singUpClicked = false;
        $scope.singInClicked = false;
        $state.go('main');
    }


    $scope.logIn = function() {
        var userObj = {userName: lc.userId, password : lc.password};
        $http({
            method: 'POST',
            url: '/logIn',
            data: { userObj : userObj
                },
            headers: {
                'Content-Type': 'application/json'
            }
        })
                .success(function(data){
                    console.log("Logged in successfully.");
                    $scope.isUserLoggedIn = true;
                    $scope.singInClicked = false;
                    $state.go("main.home");
        })
                .error(function(err){
                    alert("Incorrect credentials");
        })
    }


    $scope.validate = function () {
        if ($scope.singInClicked) {
            if (users.indexOf(lc.userId) === -1)
                alert("User doesnot exist");
            else {
                if (passwordFoUsers[lc.userId] === lc.password)
                {
                    console.log("Login successfull");
                    $scope.isUserLoggedIn = true;
                    $scope.singInClicked = false;
                } else
                    alert("Password doesnot match");
            }
        } else if ($scope.singUpClicked) {
            if (lc.userId == undefined || lc.userId == "")
            {
                alert("Please give the User Id");
            }
            else if (users.indexOf(lc.userId) !== -1)
                alert("User already exists");
            else if(lc.password != undefined || lc.password == "" || lc.password.length < 8)
                alert("Password cannot be less than 8 characters");
            else {
                if (lc.password === lc.matchPassword) {
                    users.push(lc.userId);
                    passwordFoUsers.push(lc.userId);
                    passwordFoUsers[lc.userId] = lc.password;
                    $scope.isUserLoggedIn = true;
                    $scope.singUpClicked = false;
                } else
                    alert("Passwords doesnot match");

            }
        }
    }

    $scope.cancel = function () {
        $scope.singInClicked = false;
        $scope.singUpClicked = false;
    }



});