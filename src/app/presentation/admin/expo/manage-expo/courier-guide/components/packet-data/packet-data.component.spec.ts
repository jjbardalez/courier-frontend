import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacketDataComponent } from './packet-data.component';

describe('PacketDataComponent', () => {
  let component: PacketDataComponent;
  let fixture: ComponentFixture<PacketDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacketDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacketDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
