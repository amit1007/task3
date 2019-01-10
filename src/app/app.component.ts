import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public start: string;
    public finish: string;

    public constructor() {
        this.start = "18.5641","73.7798";
        this.finish = "18.5631","73.7781";
    }

    public ngOnInit() { }

}