import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViewSourceComponent } from './list-view-source.component';

describe('ListViewSourceComponent', () => {
  let component: ListViewSourceComponent;
  let fixture: ComponentFixture<ListViewSourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListViewSourceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListViewSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
