import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { EhiContactListComponent } from './ehi-contact-list/ehi-contact-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ConfirmationModelComponent } from './confirmation-model/confirmation-model.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    EhiContactListComponent,
    UpdateContactComponent,
    ConfirmationModelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  entryComponents: [UpdateContactComponent, ConfirmationModelComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
