"use strict";

lifeSidekickApp
    .controller('OnWorkingOffersCtrl', function($rootScope, $scope) {
        var offers =[];

        offers.push({
            "name": "Write some Software",
            "description":"- Add newsletter and wholesale modules\n- Remove some tables",
            "status": "On working",
            "date": new Date("March 28, 2015 11:13:00")
        });

        offers.push({
            "name": "Babysit",
            "description":"Girls only",
            "status": "On working",
            "date": new Date("March 28, 2015 11:13:00")
        });

        offers.push({
            "name": "Write some Software",
            "description":"- Add newsletter and wholesale modules\n- Remove some tables",
            "status": "On working",
            "date": new Date("March 28, 2015 11:13:00")
        });

        offers.push({
            "name": "Babysit",
            "description":"Girls only",
            "status": "On working",
            "date": new Date("March 28, 2015 11:13:00")
        });

        $scope.offers = offers;
    });