import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickethandlePage } from './tickethandle.page';

describe('TickethandlePage', () => {
  let component: TickethandlePage;
  let fixture: ComponentFixture<TickethandlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickethandlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickethandlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
