import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-my-component',
    templateUrl: './my-component.component.html',
    styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

    @Input() customInput: string;

    @Output() customOutput = new EventEmitter<string>();

    public items: string[] = ['item 1', 'item 2', 'item 3', 'item 4'];
    public inputValue: string = '';

    constructor() { }

    ngOnInit() { }

    handleCustomEvent() {
        this.customOutput.emit(this.inputValue);
    }

}
