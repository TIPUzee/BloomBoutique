import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './layout/app/app.component';
import { HeaderComponent } from './layout/header/header.component';
import { OfferBarComponent } from './layout/offer-bar/offer-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownComponent } from './component/dropdown/dropdown.component';
import { TopHeaderComponent } from './layout/top-header/top-header.component';
import { LogoComponent } from './component/logo/logo.component';
import { LogoNoSloganComponent } from './component/logo-no-slogan/logo-no-slogan.component';
import { ThemeTogglerComponent } from './layout/theme-toggler/theme-toggler.component';
import { TopNavBarComponent } from './layout/top-nav-bar/top-nav-bar.component';
import { MainBodyComponent } from './layout/main-body/main-body.component';
import { CollectionFilterSideBarComponent } from './layout/collection-filter-side-bar/collection-filter-side-bar.component';
import { CollectionSectionDefaultComponent } from './layout/collection-section-default/collection-section-default.component';
import { RearrangeMenuOnFocusWithinDirective } from './directive/rearrange-menu-on-focus-within.directive';
import { CheckboxComponent } from './component/checkbox/checkbox.component';
import { CollectionTableComponent } from './layout/collection-table/collection-table.component';
import { SquaredDropdownComponent } from './component/squared-dropdown/squared-dropdown.component';
import { CollectionTableCellComponent } from './component/collection-table-cell/collection-table-cell.component';
import { CollectionTableLayoutSelectorComponent } from './component/collection-table-layout-selector/collection-table-layout-selector.component';
import { DiscountPipe } from './pipe/discount.pipe';
import { CollectionTablePaginationBarComponent } from './component/collection-table-pagination-bar/collection-table-pagination-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OfferBarComponent,
    DropdownComponent,
    TopHeaderComponent,
    LogoComponent,
    LogoNoSloganComponent,
    ThemeTogglerComponent,
    TopNavBarComponent,
    MainBodyComponent,
    CollectionFilterSideBarComponent,
    CollectionSectionDefaultComponent,
    RearrangeMenuOnFocusWithinDirective,
    CheckboxComponent,
    CollectionTableComponent,
    SquaredDropdownComponent,
    CollectionTableCellComponent,
    CollectionTableLayoutSelectorComponent,
    DiscountPipe,
    CollectionTablePaginationBarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
