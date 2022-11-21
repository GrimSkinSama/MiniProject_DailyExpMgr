import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIncomeCategoriesComponent } from './add-income-categories.component';

describe('AddIncomeCategoriesComponent', () => {
  let component: AddIncomeCategoriesComponent;
  let fixture: ComponentFixture<AddIncomeCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIncomeCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIncomeCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
