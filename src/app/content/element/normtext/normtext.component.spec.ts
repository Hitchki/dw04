/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NormtextComponent } from './normtext.component';

describe('NormtextComponent', () => {
  let component: NormtextComponent;
  let fixture: ComponentFixture<NormtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
