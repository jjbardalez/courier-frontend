import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipientDataComponent } from './recipient-data.component';

describe('RecipientDataComponent', () => {
  let component: RecipientDataComponent;
  let fixture: ComponentFixture<RecipientDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipientDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
