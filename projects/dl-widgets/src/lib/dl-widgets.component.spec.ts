import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DlWidgetsComponent } from './dl-widgets.component';

describe('DlWidgetsComponent', () => {
  let component: DlWidgetsComponent;
  let fixture: ComponentFixture<DlWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DlWidgetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DlWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
