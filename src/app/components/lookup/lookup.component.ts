import { Component, SimpleChanges, ViewChild } from '@angular/core';
import { AppCommonModule } from '@modules/app-common/app-common.module';
import { SharedModule } from '@modules/shared/shared.module';
import { AutocompleteComponent } from 'angular-ng-autocomplete';
import { SohoAutoCompleteComponent, SohoAutoCompleteModule, SohoLookupComponent, SohoLookupModule, SohoToastService } from 'ids-enterprise-ng';

@Component({
  selector: 'app-lookup',
  standalone: true,
  imports: [AppCommonModule, SharedModule],
  templateUrl: './lookup.component.html',
  styleUrl: './lookup.component.css'
})
export class LookupComponent {
  @ViewChild("sohoLookupComponent", { static: false })
  sohoLookupComponent?: SohoLookupComponent;
  selectedEntityId: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    (this.sohoLookupComponent as any).lookup.data = this.dataset
    this.sohoLookupComponent?.updated();
    //this.sohoLookupComponent?.updateDataset(this.dataset, {});
  }
  ngAfterViewInit(): void {
    this.sohoLookupComponent?.updated();
    //this.sohoLookupComponent?.updateDataset(this.dataset, {});
  }
  //model = ["first", "third"];
  public autoCompleteSettings: SohoLookupAutoComplete = {
    id: "id",
    label: "productName",
    value: "productId",
    template: `<script id="autocomplete-template-lookup" type="text/html">
    <li id="{{listItemId}}" data-index="{{index}}" {{#hasValue}}data-value="{{value}}"{{/hasValue}} role="listitem">
      <a href="#" tabindex="-1">
        <span>{{{label}}}</span>
        <small>{{{value}}}</small>
        <span style="display: none;" class="display-value">{{{value}}}</span>
      </a>
      </li>
    </script>`,
    change: (e: any) => {
      console.log("Autocomplete change", e);
    },
    selected: (e: any) => {
      console.log("Autocomplete selected", e);
      console.log(e[2].index);
      console.log(this.dataset);
      this.selectedEntityId = e[2].id;
      console.log(this.dataset);
    },
    // beforeopen: (e: any) => {
    //   console.log("Autocomplete beforeopen", e);
    // },
  };
  onButtonClick() {
    console.log('BUTTON CLICK');
    this.dataset = this.dataset.filter(item => item.id !== this.selectedEntityId);
    let newDataset = this.dataset;
    console.log('newDataset');
    console.log(newDataset);
    if (this.sohoLookupComponent?.dataset) {
      this.sohoLookupComponent.dataset = newDataset;
      this.sohoLookupComponent?.updated();
      //this.sohoLookupComponent?.updateDataset(this.dataset, {});
      console.log('this.sohoLookupComponent.dataset');
      console.log(this.sohoLookupComponent.dataset);
    }
  }
  filterLookUpSourceData1() {
    let getData: any = (
      request: any,
      response:  any
    ): void => {
        let filteredData: string | any[] = [];
        const pageSize = request.pagesize || 10;
            const pageNumber = request.activePage || 1;
        const start = (pageNumber - 1) * pageSize;
        const paginatedData = filteredData.slice(start, start + pageSize);

        response(paginatedData, {
          ...request,
          firstPage: pageNumber === 1,
          lastPage: start + pageSize >= filteredData.length,
          total: filteredData.length,
          grandTotal: this.dataset.length,
        });
    };
    return getData;
  }
  private getAssetColumns(): Array<any> {
    const columns = [
      {
        id: "templateId",
        sortable: false,
        field: "templateId",
      },
      {
        id: "templateDisplayName",
        name: "Template",
        field: "displayName",
        sortable: false,
      },
    ];
    const sohoGridColumns: Array<any> = [];
    columns.forEach((column) => {
      const sohoGridColumn = {
        name: column.name,
        field: column.field,
        sortable: column.sortable,
        id: column.id,
      } as any;
      sohoGridColumns.push(sohoGridColumn);
    });
    return sohoGridColumns;
  }

  options = {
      columns: this.getAssetColumns(),
      source:this.filterLookUpSourceData1(),
      emptyMessage: {
        title: 'Record not shared',
        info: 'Search for user or sales team',
        icon: 'icon-empty-no-users-new',
      }
    }

  dataset: Order[] = [
    {
      id: 1,
      productId: "first",
      productName: "Compressor",
      activity: "Assemble Paint",
      quantity: 1,
      price: 210.99,
      status: "OK",
      orderDate: new Date(2014, 12, 8),
      action: "Action",
    },
    {
      id: 2,
      productId: "second",
      productName: "Different Compressor",
      activity: "Inspect and Repair",
      quantity: 2,
      price: 210.99,
      status: "",
      orderDate: new Date(2015, 7, 3),
      action: "On Hold",
    },
    {
      id: 3,
      productId: "third",
      productName: "Compressor",
      activity: "Inspect and Repair",
      quantity: 1,
      price: 120.99,
      status: "",
      orderDate: new Date(2014, 6, 3),
      action: "Action",
    },
    {
      id: 4,
      productId: "fourth",
      productName: "Another Compressor",
      activity: "Assemble Paint",
      quantity: 3,
      price: 210.99,
      status: "OK",
      orderDate: new Date(2015, 3, 3),
      action: "Action",
    },
    {
      id: 5,
      productId: "fifth",
      productName: "I Love Compressors",
      activity: "Inspect and Repair",
      quantity: 4,
      price: 210.99,
      status: "OK",
      orderDate: new Date(2015, 5, 5),
      action: "On Hold",
    },
    {
      id: 6,
      productId: "sixth",
      productName: "Air Compressors",
      activity: "Inspect and Repair",
      quantity: 41,
      price: 120.99,
      status: "OK",
      orderDate: new Date(2014, 6, 9),
      action: "On Hold",
    },
    {
      id: 7,
      productId: "seventh",
      productName: "Some Compressor",
      activity: "inspect and Repair",
      quantity: 41,
      price: 123.99,
      status: "OK",
      orderDate: new Date(2014, 6, 9),
      action: "On Hold",
    },
  ];

  dataset2: Order[] = [
    {
      id: 1,
      productId: "1-1",
      productName: "Ice Cream",
      activity: "Assemble Paint",
      quantity: 1,
      price: 210.99,
      status: "OK",
      orderDate: new Date(2014, 12, 8),
      action: "Action",
    },
    {
      id: 2,
      productId: "1-2",
      productName: "Cookie",
      activity: "Inspect and Repair",
      quantity: 2,
      price: 210.99,
      status: "",
      orderDate: new Date(2015, 7, 3),
      action: "On Hold",
    },
    {
      id: 3,
      productId: "1-3",
      productName: "Cupcake",
      activity: "Inspect and Repair",
      quantity: 1,
      price: 120.99,
      status: "",
      orderDate: new Date(2014, 6, 3),
      action: "Action",
    },
    {
      id: 4,
      productId: "1-4",
      productName: "Pretzel",
      activity: "Assemble Paint",
      quantity: 3,
      price: 210.99,
      status: "OK",
      orderDate: new Date(2015, 3, 3),
      action: "Action",
    },
    {
      id: 5,
      productId: "1-5",
      productName: "Smoothie",
      activity: "Inspect and Repair",
      quantity: 4,
      price: 210.99,
      status: "OK",
      orderDate: new Date(2015, 5, 5),
      action: "On Hold",
    },
    {
      id: 6,
      productId: "1-6",
      productName: "Brownie",
      activity: "Inspect and Repair",
      quantity: 41,
      price: 120.99,
      status: "OK",
      orderDate: new Date(2014, 6, 9),
      action: "On Hold",
    },
    {
      id: 7,
      productId: "1-7",
      productName: "Leche Flan",
      activity: "inspect and Repair",
      quantity: 41,
      price: 123.99,
      status: "OK",
      orderDate: new Date(2014, 6, 9),
      action: "On Hold",
    },
  ];
  datasetTitle = 'Dataset'

}

interface Order {
  id: number;
  productId: string;
  productName: string;
  activity: string;
  quantity: number;
  price: number;
  status: string;
  orderDate: Date;
  action: string;
}
interface SohoLookupAutoComplete {
  /** id of item */
  id: string;

  /** Value of selected item */
  value: string;

  /** Label to be shown in the autocomplete list*/
  label: string;

  /** Menu template, appropriate markup is expected. */
  template?: string;

  change?(event: any): void;

  selected?(selected: any[]): void;

  // beforeopen?(event: SohoAutoCompleteEvent): void;
}
