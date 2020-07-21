import { Routes } from '@angular/router';

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
import { CampagneComponent } from './campagne/campagne.component';
import { AjouterCampagneComponent } from './ajouter-campagne/ajouter-campagne.component';
import { EditorComponent } from './editor/editor.component';
import { LoginComponent } from './login/login.component';
import{ ListeUtilisateursComponent } from './../component/liste-utilisateurs/liste-utilisateurs.component'
import { AjouterUtilisateurComponent } from './ajouter-utilisateur/ajouter-utilisateur.component';
import { ListeContactsComponent } from './liste-contacts/liste-contacts.component';

export const ComponentsRoutes: Routes = [
	{
		
		path: '',
		children: [
			{
				path: 'progressbar',
				component: NgbdpregressbarBasicComponent,
				data: {
					title: 'Progressbar',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Progressbar' }
					]
				}
			},
			{
				path: 'campagnes',
				component: CampagneComponent,
				data: {
					title: 'Campagnes',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Campagnes' }
					]
				}
			},
			{
				path: 'editor',
				component: EditorComponent,
				data: {
					title: 'Drag and drop Editor',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Drag and drop editor' }
					]
				}
			},
			{
				path: 'listesContacts',
				component: ListeContactsComponent,
				data: {
					title: 'Listes des contacts',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Listes des contacts' }
					]
				}
			},
			{
				path: 'users',
				component: ListeUtilisateursComponent,
				data: {
					title: 'Liste des utilisateurs',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Liste des utilisateurs' }
					]
				}
			},
			{
				path: 'ajouterUtilisateur',
				component: AjouterUtilisateurComponent,
				data: {
					title: 'Ajouter un utilisateur',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Ajouter un utilisateur' }
					]
				}
			},
			{
				path: 'ajouterCampagne',
				component: AjouterCampagneComponent,
				data: {
					title: 'Créer une nouvelle campagne',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Créer une nouvelle campagne' }
					]
				}
			},

			{
				path: 'login',
				component: LoginComponent,
				data: {
					title: 'Login',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'login' }
					]
				}
			},

			{
				path: 'pagination',
				component: NgbdpaginationBasicComponent,
				data: {
					title: 'Pagination',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Pagination' }
					]
				}
			},
			{
				path: 'accordion',
				component: NgbdAccordionBasicComponent,
				data: {
					title: 'Accordion',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Accordion' }
					]
				}
			},
			{
				path: 'alert',
				component: NgbdAlertBasicComponent,
				data: {
					title: 'Alert',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Alert' }
					]
				}
			},
			{
				path: 'carousel',
				component: NgbdCarouselBasicComponent,
				data: {
					title: 'Carousel',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Carousel' }
					]
				}
			},
			{
				path: 'datepicker',
				component: NgbdDatepickerBasicComponent,
				data: {
					title: 'Datepicker',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Datepicker' }
					]
				}
			},
			{
				path: 'dropdown',
				component: NgbdDropdownBasicComponent,
				data: {
					title: 'Dropdown',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Dropdown' }
					]
				}
			},
			{
				path: 'modal',
				component: NgbdModalBasicComponent,
				data: {
					title: 'Modal',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Modal' }
					]
				}
			},
			{
				path: 'poptool',
				component: NgbdPopTooltipComponent,
				data: {
					title: 'Popover & Tooltip',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Popover & Tooltip' }
					]
				}
			},
			{
				path: 'rating',
				component: NgbdratingBasicComponent,
				data: {
					title: 'Rating',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Rating' }
					]
				}
			},
			{
				path: 'tabs',
				component: NgbdtabsBasicComponent,
				data: {
					title: 'Tabs',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Tabs' }
					]
				}
			},
			{
				path: 'timepicker',
				component: NgbdtimepickerBasicComponent,
				data: {
					title: 'Timepicker',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Timepicker' }
					]
				}
			},
			{
				path: 'buttons',
				component: ButtonsComponent,
				data: {
					title: 'Button',
					urls: [
						{ title: 'Dashboard', url: '/dashboard' },
						{ title: 'ngComponent' },
						{ title: 'Button' }
					]
				}
			},
			{
				path: 'toast',
				component: ToastComponent,
				data: {
					title: 'Toast',
				}
			}
		]
	}
];
