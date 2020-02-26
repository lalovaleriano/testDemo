import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FallidoComponent } from './fallido.component';

describe('FallidoComponent', () => {
  let component: FallidoComponent;
  let fixture: ComponentFixture<FallidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FallidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FallidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
