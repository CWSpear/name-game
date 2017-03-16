import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

import { RedirectDirective } from './redirect.directive';

@Component({
  selector: 'app-test-component',
  template: `<div appRedirect [commands]="['/']"></div>`,
})
class TestComponent {}

describe('PlayGameComponent', () => {
  let directive: RedirectDirective;
  let directiveEl: DebugElement;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          RouterTestingModule,
        ],
        declarations: [
          TestComponent,
          RedirectDirective,
        ],
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    directiveEl = fixture.debugElement.query(By.directive(RedirectDirective));
    directive = directiveEl.injector.get(RedirectDirective);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(directiveEl).not.toBeNull();
  });

  it('should receive input commands', () => {
    expect(directive.commands).toEqual(['/']);
  });
});
