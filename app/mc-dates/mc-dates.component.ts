function McDatesController ($scope, moment, $mdDateLocale, $filter): void {
    $mdDateLocale.formatDate = function (date):any {
        return $filter('date')(date, 'yyyy-MM-dd');
    };
    const ctrl = this;

    this.valStart = null;
    this.valEnd = null;

    $scope.$watch(() => ctrl.startDate, function (newVal, oldVal): void {
        const checkResult = Date.parse(newVal);
        if(isNaN(checkResult) === true) {
            return;
        }
        ctrl.valStart = new Date(newVal);
    });

    $scope.$watch(() => ctrl.valStart, function (newVal, oldVal): void {
        if( newVal === null) {
            return;
        }
        ctrl.startDate = moment(newVal).format('YYYY-MM-DD');
    });

    $scope.$watch(() => ctrl.endDate, function (newVal): void {
        const checkResult = Date.parse(newVal);
        if(isNaN(checkResult) === true) {
            return;
        }
        ctrl.valEnd = new Date(newVal);
    });

    $scope.$watch(() => ctrl.valEnd, function (newVal): void {
        if( newVal === null) {
            return;
        }
        ctrl.endDate = moment(newVal).format('YYYY-MM-DD');
    });

    $scope.onChangeStart = function(): void {
        console.log('mcChange calling');
        ctrl.mcChange();
    };

    $scope.yesterday = function (): void {
        let startDate = moment();
        ctrl.startDate = startDate.subtract(1, 'days').format('YYYY-MM-DD');
        ctrl.mcChange();
    };
}

export class McDatesComponent implements ng.IComponentOptions {
    static NAME: string = 'mcDates';
    controller: any;
    templateUrl: any;
    startDate: Date;
    endDate: Date;

    bindings = {
        startDate: '=dateFrom',
        endDate:'=dateTo',
        mcChange: '&'
    };

    constructor() {
        this.templateUrl = require('./mc-dates.html');
        this.controller = McDatesController;
    }
}
