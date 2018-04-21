import {
    Component, NgModule, Output, EventEmitter, ElementRef, OnInit, AfterContentInit,
    AfterViewInit
} from "@angular/core";
import {CommonModule} from "@angular/common";

declare var $: any;

@Component({
    selector: 'persian-date',
    template: `<input type="text" id="{{id}}" class="form-control">`
})

export class PersianDateComponent implements AfterViewInit{
    id: any;
    @Output() dateChange: EventEmitter<any> = new EventEmitter();

    constructor(private el: ElementRef) {
        this.guid();
    }

    ngAfterViewInit() {
        this.initDatePicker()
    }

    initDatePicker() {
        $('#'+this.id).persianDatepicker({
            altFormat: "YYYY MM DD HH:mm:ss",
            observer: true,
            persianDigit: true,
            format: 'YYYY/MM/DD',
            onSelect: (date) => {
                this.dateChange.emit(date)
            }
        });
    }


    // # Generate GUID

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    guid() {
        this.id = this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

}