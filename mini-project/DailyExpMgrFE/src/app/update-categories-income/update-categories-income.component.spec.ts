import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCategoriesIncomeComponent } from './update-categories-income.component';

describe('UpdateCategoriesIncomeComponent', () => {
  let component: UpdateCategoriesIncomeComponent;
  let fixture: ComponentFixture<UpdateCategoriesIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCategoriesIncomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCategoriesIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
