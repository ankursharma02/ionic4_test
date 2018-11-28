import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Unloadtab2Page } from './unloadtab2.page';

describe('Unloadtab2Page', () => {
  let component: Unloadtab2Page;
  let fixture: ComponentFixture<Unloadtab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Unloadtab2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Unloadtab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
