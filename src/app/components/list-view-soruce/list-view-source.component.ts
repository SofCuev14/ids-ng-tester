import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppCommonModule } from '@modules/app-common/app-common.module';
import { ModalFactoryService } from '@modules/shared/services/modal-factory.service';
import { ListViewModalComponent } from '../list-view-modal/list-view-modal.component';
import { SharedModule } from '@modules/shared/shared.module';
import { CommonUtils } from '@modules/shared/utils/public-api';
import { SohoListViewComponent } from 'ids-enterprise-ng';

export interface ListViewDataset {
  id?: string;
  header?: string;
  subheader?: string;
  micro?: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-list-view-source',
  standalone: true,
  imports: [AppCommonModule, SharedModule],
  templateUrl: './list-view-source.component.html',
  styleUrl: './list-view-source.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListViewSourceComponent {
  emptyMessage: SohoEmptyMessageOptions = {
    icon: 'icon-empty-no-alerts-new',
    title: 'Search result',
    info: 'Record not found.',
  };
  searchable = true;

  dataset: ListViewDataset[] = [];
  pagesize: number = 5;

  template = `
  <div>
    <div class="assign-entity-card__element assign-entity-card__info">
      <p soho-listview-header>{{ data.header }}</p>
      <p soho-listview-micro>{{ data.subheader }}</p>
    </div>
  </div>`;

  constructor(private modalFactoryService: ModalFactoryService) {
    this.setupDataset();
  }

  private setupDataset(): void {
    this.dataset.push({
      header: '063001',
      micro: '10/11/2015',
      subheader: 'Special fields test - New item has been created.',
    });
    this.dataset.push({
      header: '063002',
      micro: '10/11/2015',
      subheader: 'Part #4212132 has low inventory level',
      disabled: true,
    });
    this.dataset.push({
      header: '063003',
      micro: '10/07/2015',
      subheader: 'Check #112412 parts ordering.',
    });
    this.dataset.push({
      header: '063004',
      micro: '10/07/2015',
      subheader: 'Special fields test - New item has been created.',
    });
    this.dataset.push({
      header: '063005',
      micro: '10/11/2015',
      subheader: 'Call XYZ Inc at 5 PM',
    });
    this.dataset.push({
      header: '063006',
      micro: '10/11/2015',
      subheader: 'Part #4212132 has low inventory level',
    });
    this.dataset.push({
      header: '063007',
      micro: '07/11/2015',
      subheader: 'Special fields test - New item has been created.',
    });
    this.dataset.push({
      header: '063008',
      micro: '10/11/2015',
      subheader: 'Part #5212132 has low inventory level',
    });
    this.dataset.push({
      header: '063009',
      micro: '10/07/2015',
      subheader: 'Check #212412 parts ordering.',
    });
    this.dataset.push({
      header: '063010',
      micro: '10/11/2015',
      subheader: 'Special fields test - New item has been created.',
    });
    this.dataset.push({
      header: '063011',
      micro: '10/11/2015',
      subheader: 'Call TMZ Inc at 5 PM',
    });
    this.dataset.push({
      header: '063012',
      micro: '07/08/2015',
      subheader: 'Part #6212132 has low inventory level',
    });
    this.dataset.push({
      header: '063001',
      micro: '10/11/2015',
      subheader: 'Special fields test - New item has been created.',
    });
    this.dataset.push({
      header: '063002',
      micro: '10/11/2015',
      subheader: 'Part #4212132 has low inventory level',
      disabled: true,
    });
    this.dataset.push({
      header: '063003',
      micro: '10/07/2015',
      subheader: 'Check #112412 parts ordering.',
    });
    this.dataset.push({
      header: '063004',
      micro: '10/07/2015',
      subheader: 'Special fields test - New item has been created.',
    });
    this.dataset.push({
      header: '063005',
      micro: '10/11/2015',
      subheader: 'Call XYZ Inc at 5 PM',
    });
    this.dataset.push({
      header: '063006',
      micro: '10/11/2015',
      subheader: 'Part #4212132 has low inventory level',
    });
    this.dataset.push({
      header: '063007',
      micro: '07/11/2015',
      subheader: 'Special fields test - New item has been created.',
    });
    this.dataset.push({
      header: '063008',
      micro: '10/11/2015',
      subheader: 'Part #5212132 has low inventory level',
    });
    this.dataset.push({
      header: '063009',
      micro: '10/07/2015',
      subheader: 'Check #212412 parts ordering.',
    });
    this.dataset.push({
      header: '063010',
      micro: '10/11/2015',
      subheader: 'Special fields test - New item has been created.',
    });
    this.dataset.push({
      header: '063011',
      micro: '10/11/2015',
      subheader: 'Call TMZ Inc at 5 PM',
    });
    this.dataset.push({
      header: '063012',
      micro: '07/08/2015',
      subheader: 'Part #6212132 has low inventory level',
    });
  }

  listViewSource = (options: any, callback: any) => {
    const page = options.page || 1; 
    const pagesize = options.pagesize || this.pagesize;

    const startIndex = (page - 1) * pagesize;
    const endIndex = startIndex + pagesize;
    const paginatedData = this.dataset.slice(startIndex, endIndex);

    callback({
      data: paginatedData,
      total: this.dataset.length
    });
  };
}
