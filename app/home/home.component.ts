class HomeController implements ng.IController {
    private d1: string = null;
    private d2: string = null;
    private _moment: any = null;

    set date1(x:string | Date) {
        if(typeof x === 'object') {
            const tmp = this._moment(x).format('YYYY-MM-DD');
            if( tmp === this.d1 ) {
                return;
            }
            this.d1 = this._moment(x).format('YYYY-MM-DD');
        } else {
            this.d1 = x;
        }
    }
    get date1():string| Date {
        return this.d1;
    }

    set date2(x:string | Date) {
        if(typeof x === 'object') {
            const tmp = this._moment(x).format('YYYY-MM-DD');
            if( tmp === this.d2 ) { return; }
            this.d2 = tmp;
        } else {
            this.d2 = x;
        }
    }
    get date2():string| Date {
        return this.d2;
    }
    changeDates: Function;

    constructor($scope, moment) {
        this._moment = moment;

        this.changeDates = function(): void {
            console.log('changeDates calling from mc-change');
        };
    }
}

export class HomeComponent implements ng.IComponentOptions {
    static NAME: string = 'homeView';
    controller: any;
    templateUrl: any;
    constructor() {
        this.controller = HomeController;
        this.templateUrl = require('./home.html');
    }
}
