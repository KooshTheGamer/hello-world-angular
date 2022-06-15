import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
    <h2>{{getTitle()}}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{ course }}
        </li>

    </ul>
    `
})
export class CoursesComponant {
    title = "List of courses";
    courses = ["course1", "course2", "course3"]

    //logic to Call for an HTTP service
    
}

