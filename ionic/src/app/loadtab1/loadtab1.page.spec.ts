import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Loadtab1Page } from './loadtab1.page';

describe('Loadtab1Page', () => {
  let component: Loadtab1Page;
  let fixture: ComponentFixture<Loadtab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Loadtab1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Loadtab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
