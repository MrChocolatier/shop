import { Component, OnInit, Inject, Optional } from '@angular/core';

import { ConfigOptionsService, generatorFactory, GENERATOR, LocalStorageService, APP_INFO } from '../../services';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  providers: [
    {
      provide: GENERATOR,
      useFactory: generatorFactory(8)
    }
  ]
})
export class DemoComponent implements OnInit {
  config: any;

  constructor(
    private configOptionsService: ConfigOptionsService,
    private localStorageService: LocalStorageService,
    @Inject(GENERATOR) private randomGenerator: string,
    @Inject(APP_INFO)
    @Optional() public appInfo: any
  ) { }

  ngOnInit() {
    this.configOptionsService.id = this.randomGenerator;
    this.configOptionsService.email = 'example@example.com';
    this.configOptionsService.login = 'example';

    this.config = {
      id: this.configOptionsService.id,
      email: this.configOptionsService.email,
      login: this.configOptionsService.login
    };

    this.localStorageService.setItem(this.config.id, this.config);
    console.log(
      'From localStorage:',
      this.localStorageService.getItem(this.config.id)
    );
  }

}
