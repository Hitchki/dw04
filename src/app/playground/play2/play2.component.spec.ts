/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Play2Component } from './play2.component';

describe('Play2Component', () => {
  let component: Play2Component;
  let fixture: ComponentFixture<Play2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Play2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Play2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
