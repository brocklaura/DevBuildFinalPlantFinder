/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PlantDetailsComponent } from './plant-details.component';

let component: PlantDetailsComponent;
let fixture: ComponentFixture<PlantDetailsComponent>;

describe('plant-details component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PlantDetailsComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PlantDetailsComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});