import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppCommonModule } from '@modules/app-common/app-common.module';
import { DataGridComponent } from './components/data-grid/data-grid.component';
import { HeaderComponent } from './components/header/header.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { LookupComponent } from './components/lookup/lookup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppCommonModule,
    DataGridComponent,
    HeaderComponent,
    ListViewComponent,
    LookupComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Ids Ng tester';
  subHeader = '18.3.3';
}
