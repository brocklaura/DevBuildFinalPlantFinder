/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { AddPlantComponent } from './add-plant.component';

let component: AddPlantComponent;
let fixture: ComponentFixture<AddPlantComponent>;

describe('add-plant component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AddPlantComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(AddPlantComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});