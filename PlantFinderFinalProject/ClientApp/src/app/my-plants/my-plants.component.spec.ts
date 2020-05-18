/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { MyPlantsComponent } from './my-plants.component';

let component: MyPlantsComponent;
let fixture: ComponentFixture<MyPlantsComponent>;

describe('my-plants component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MyPlantsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(MyPlantsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});