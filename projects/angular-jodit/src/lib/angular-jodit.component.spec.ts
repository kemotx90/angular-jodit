import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AngularJoditComponent } from "./angular-jodit.component";
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';

// Call this before beginning the tests
TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

describe('AngularJoditComponent', () => {
  let component: AngularJoditComponent;
  let fixture: ComponentFixture<AngularJoditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularJoditComponent ]
    });

    fixture = TestBed.createComponent(AngularJoditComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should implement ControlValueAccessor interface', () => {
    expect(typeof component.writeValue).toBe('function');
    expect(typeof component.registerOnChange).toBe('function');
    expect(typeof component.registerOnTouched).toBe('function');
  });

  it('should implement AfterViewInit interface', () => {
    expect(typeof component.ngAfterViewInit).toBe('function');
  });

  it('should implement OnDestroy interface', () => {
    expect(typeof component.ngOnDestroy).toBe('function');
  });

  // TODO: write tests for other component functionality
});
