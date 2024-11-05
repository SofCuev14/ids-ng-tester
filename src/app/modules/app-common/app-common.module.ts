import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SohoAutoCompleteComponent, SohoAutoCompleteModule, SohoComponentsModule, SohoModalDialogService } from 'ids-enterprise-ng';
import { SohoLocaleInitializerModule } from '@modules/locale-initializer/locale-initializer.module';
import { FormsModule } from '@angular/forms';

const exportedModules = [CommonModule, SohoComponentsModule, FormsModule ];

@NgModule({
  declarations: [],
  imports: [SohoLocaleInitializerModule, ...exportedModules],
  exports: [...exportedModules],
  providers: [SohoModalDialogService]
})
export class AppCommonModule {}
