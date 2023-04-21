import { ComponentFixture, TestBed } from "@angular/core/testing";

import { user_loginComponent } from "./user_login.component";

describe("user_loginComponent", () => {
  let component: user_loginComponent;
  let fixture: ComponentFixture<user_loginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [user_loginComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(user_loginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
