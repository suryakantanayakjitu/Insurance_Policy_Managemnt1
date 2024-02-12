import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppliedPolicyComponent } from './view-applied-policy.component';

describe('ViewAppliedPolicyComponent', () => {
  let component: ViewAppliedPolicyComponent;
  let fixture: ComponentFixture<ViewAppliedPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewAppliedPolicyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAppliedPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
