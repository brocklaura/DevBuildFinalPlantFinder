/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { SuggestionPageComponent } from './suggestion-page.component';

let component: SuggestionPageComponent;
let fixture: ComponentFixture<SuggestionPageComponent>;

describe('suggestion-page component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ SuggestionPageComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(SuggestionPageComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});