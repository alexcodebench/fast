import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MembersTableComponent } from './members-table.component';

describe('MembersTableComponent', () => {
  let component: MembersTableComponent;
  let fixture: ComponentFixture<MembersTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
