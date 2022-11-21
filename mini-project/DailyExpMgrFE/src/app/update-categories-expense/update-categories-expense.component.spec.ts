import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCategoriesExpenseComponent } from './update-categories-expense.component';

describe('UpdateCategoriesExpenseComponent', () => {
  let component: UpdateCategoriesExpenseComponent;
  let fixture: ComponentFixture<UpdateCategoriesExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCategoriesExpenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCategoriesExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
