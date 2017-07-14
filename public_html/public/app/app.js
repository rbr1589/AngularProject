var app = angular.module("mainApp", ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider

            .state('main', {
                url: '/#',
                templateUrl: './Views/login.html'
            })

            // HOME STATES AND NESTED VIEWS ========================================
            .state('main.home', {
                url: '/home',
                templateUrl: './Views/home.html'
            })

            // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('main.about', {
                url: '/about',
                templateUrl: './Views/about.html'
                        // we'll get to this in a bit       
            });

});


app.run(function ($location) {
    $location.path('/#');
})



app.directive("template", function () {
    return {
        templateURL: "../app/Views/directive.html"
    }
});

