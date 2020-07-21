import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentsRoutes } from './component.routing';
import { NgbdpregressbarBasicComponent } from './progressbar/progressbar.component';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAccordionBasicComponent } from './accordion/accordion.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdCarouselBasicComponent } from './carousel/carousel.component';
import { NgbdDatepickerBasicComponent } from './datepicker/datepicker.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdModalBasicComponent } from './modal/modal.component';
import { NgbdPopTooltipComponent } from './popover-tooltip/popover-tooltip.component';
import { NgbdratingBasicComponent } from './rating/rating.component';
import { NgbdtabsBasicComponent } from './tabs/tabs.component';
import { NgbdtimepickerBasicComponent } from './timepicker/timepicker.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { ToastComponent } from './toast/toast.component';
import { ToastsContainer } from './toast/toast-container';
import { CampagneComponent } from './campagne/campagne.component';
import { AjouterCampagneComponent } from './ajouter-campagne/ajouter-campagne.component';
import { EditorDashboardComponent } from './editor-dashboard/editor-dashboard.component';
import { EditorComponent } from './editor/editor.component';

import { EmailEditorModule } from 'angular-email-editor';
import { LoginComponent } from './login/login.component';
import { ListeUtilisateursComponent } from './liste-utilisateurs/liste-utilisateurs.component';
import { AjouterUtilisateurComponent } from './ajouter-utilisateur/ajouter-utilisateur.component';

import { HttpClientModule } from '@angular/common/http';
import { ListeContactsComponent } from './liste-contacts/liste-contacts.component';
import { AjouterListeComponent } from './ajouter-liste/ajouter-liste.component';
import { ModifierUtilisateurComponent } from './modifier-utilisateur/modifier-utilisateur.component';
import { ConfirmationDilogComponent } from './confirmation-dilog/confirmation-dilog.component';

//import { BrowserModule} from '@angular/platform-browser'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    EmailEditorModule,
    HttpClientModule
    //BrowserModule
  ],
  declarations: [
    NgbdpregressbarBasicComponent,
    NgbdpaginationBasicComponent,
    NgbdAccordionBasicComponent,
    NgbdAlertBasicComponent,
    NgbdCarouselBasicComponent,
    NgbdDatepickerBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdModalBasicComponent,
    NgbdPopTooltipComponent,
    NgbdratingBasicComponent,
    NgbdtabsBasicComponent,
    NgbdtimepickerBasicComponent,
    ButtonsComponent,
    CardsComponent,
    ToastComponent,
    ToastsContainer,
    CampagneComponent,
    AjouterCampagneComponent,
    EditorDashboardComponent,
    EditorComponent,
    LoginComponent,
    ListeUtilisateursComponent,
    AjouterUtilisateurComponent,
    ListeContactsComponent,
    AjouterListeComponent,
    ModifierUtilisateurComponent,
    ConfirmationDilogComponent
  ]
})
export class ComponentsModule {}
