import { createComponent } from '../../jest-config.helper';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { APP_BASE_HREF } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => { }));

  it('should create snapshots', async () => {
    const { component, fixture } = await createComponent(AppComponent, {
      declarations: [ AppComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ { provide: APP_BASE_HREF, useValue: '/' } ]
    });
    fixture.detectChanges();
    expect(fixture.nativeElement).toMatchSnapshot();
  });
});
