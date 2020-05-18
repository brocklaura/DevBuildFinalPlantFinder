/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { WishlistComponent } from './wishlist.component';

let component: WishlistComponent;
let fixture: ComponentFixture<WishlistComponent>;

describe('wishlist component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ WishlistComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(WishlistComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});