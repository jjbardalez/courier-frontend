import { Component } from '@angular/core';
import { LoaderService } from './common/shared/components/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'courier-frontend';

  constructor(
    public loaderService: LoaderService
  ) { }
}
