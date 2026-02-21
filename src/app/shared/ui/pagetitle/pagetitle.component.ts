
import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './pagetitle.component.html',
  styleUrls: ['./pagetitle.component.scss'],
  imports: [TranslateModule]
})
export class PagetitleComponent implements OnInit, OnChanges {

  @Input() breadcrumbItems: Array<{ label: string; active?: boolean }> = [];
  @Input() title = '';

  resolvedTitle = '';
  resolvedBreadcrumbItems: Array<{ label: string; active?: boolean }> = [];

  private readonly labelKeyMap: Record<string, string> = {
    'Dashboard': 'PAGETITLE.DASHBOARD',
    'Crypto': 'PAGETITLE.CRYPTO',
    'Skote': 'PAGETITLE.SKOTE',
    'Back & White': 'PAGETITLE.BRAND',
    'Google Maps': 'PAGETITLE.GOOGLE_MAPS',
    'Apps': 'MENUITEMS.APPS.TEXT',
    'Calendar': 'MENUITEMS.CALENDAR.TEXT',
    'Chat': 'MENUITEMS.CHAT.TEXT',
    'File Manager': 'MENUITEMS.FILEMANAGER.TEXT',
    'Ecommerce': 'MENUITEMS.ECOMMERCE.TEXT',
    'Crypto Dashboard': 'MENUITEMS.DASHBOARDS.LIST.CRYPTO',
    'Email': 'MENUITEMS.EMAIL.TEXT',
    'Email Template': 'MENUITEMS.EMAIL.LIST.TEMPLATE.TEXT',
    'Invoices': 'MENUITEMS.INVOICES.TEXT',
    'Projects': 'MENUITEMS.PROJECTS.TEXT',
    'Tasks': 'MENUITEMS.TASKS.TEXT',
    'Contacts': 'MENUITEMS.CONTACTS.TEXT',
    'Blog': 'MENUITEMS.BLOG.TEXT',
    'Pages': 'MENUITEMS.PAGES.TEXT',
    'Utility': 'MENUITEMS.UTILITY.TEXT',
    'UI Elements': 'MENUITEMS.UIELEMENTS.TEXT',
    'UI': 'MENUITEMS.UIELEMENTS.TEXT',
    'Components': 'MENUITEMS.COMPONENTS.TEXT',
    'Forms': 'MENUITEMS.FORMS.TEXT',
    'Tables': 'MENUITEMS.TABLES.TEXT',
    'Charts': 'MENUITEMS.CHARTS.TEXT',
    'Icons': 'MENUITEMS.ICONS.TEXT',
    'Maps': 'MENUITEMS.MAPS.TEXT',
    'Products': 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
    'Product Detail': 'MENUITEMS.ECOMMERCE.LIST.PRODUCTDETAIL',
    'Orders': 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
    'O rders': 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
    'Customers': 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
    'Cart': 'MENUITEMS.ECOMMERCE.LIST.CART',
    'Checkout': 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
    'Shops': 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
    'Add Product': 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
    'Wallets': 'MENUITEMS.CRYPTO.LIST.WALLET',
    'Buy/Sell': 'MENUITEMS.CRYPTO.LIST.BUY/SELL',
    'Exchange': 'MENUITEMS.CRYPTO.LIST.EXCHANGE',
    'Lending': 'MENUITEMS.CRYPTO.LIST.LENDING',
    'KYC Application': 'MENUITEMS.CRYPTO.LIST.KYCAPPLICATION',
    'Inbox': 'MENUITEMS.EMAIL.LIST.INBOX',
    'Read Email': 'MENUITEMS.EMAIL.LIST.READEMAIL',
    'Basic Action': 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BASIC',
    'Alert Email': 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.ALERT',
    'Billing Email': 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BILLING',
    'Invoice List': 'MENUITEMS.INVOICES.LIST.INVOICELIST',
    'Detail': 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
    'Projects Grid': 'MENUITEMS.PROJECTS.LIST.GRID',
    'Projects List': 'MENUITEMS.PROJECTS.LIST.PROJECTLIST',
    'Projects Overview': 'MENUITEMS.PROJECTS.LIST.OVERVIEW',
    'Create New': 'MENUITEMS.PROJECTS.LIST.CREATE',
    'Task List': 'MENUITEMS.TASKS.LIST.TASKLIST',
    'Kanban Board': 'MENUITEMS.TASKS.LIST.KANBAN',
    'Create Task': 'MENUITEMS.TASKS.LIST.CREATETASK',
    'User Grid': 'MENUITEMS.CONTACTS.LIST.USERGRID',
    'Users Grid': 'MENUITEMS.CONTACTS.LIST.USERGRID',
    'User List': 'MENUITEMS.CONTACTS.LIST.USERLIST',
    'Users List': 'MENUITEMS.CONTACTS.LIST.USERLIST',
    'Profile': 'MENUITEMS.CONTACTS.LIST.PROFILE',
    'Blog List': 'MENUITEMS.BLOG.LIST.BLOGLIST',
    'Blog Grid': 'MENUITEMS.BLOG.LIST.BLOGGRID',
    'Blog Details': 'MENUITEMS.BLOG.LIST.DETAIL',
    'Starter Page': 'MENUITEMS.UTILITY.LIST.STARTER',
    'Maintenance': 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
    'Timeline': 'MENUITEMS.UTILITY.LIST.TIMELINE',
    'FAQs': 'MENUITEMS.UTILITY.LIST.FAQS',
    'Pricing': 'MENUITEMS.UTILITY.LIST.PRICING',
    'Error 404': 'MENUITEMS.UTILITY.LIST.ERROR404',
    'Error 500': 'MENUITEMS.UTILITY.LIST.ERROR500',
    'Alerts': 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
    'Buttons': 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
    'Cards': 'MENUITEMS.UIELEMENTS.LIST.CARDS',
    'Carousel': 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
    'Dropdown': 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
    'Dropdowns': 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
    'Grid': 'MENUITEMS.UIELEMENTS.LIST.GRID',
    'Images': 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
    'Lightbox': 'MENUITEMS.UIELEMENTS.LIST.LIGHTBOX',
    'Modals': 'MENUITEMS.UIELEMENTS.LIST.MODALS',
    'Range Slider': 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
    'Progress Bars': 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
    'Placeholder': 'MENUITEMS.UIELEMENTS.LIST.PLACEHOLDER',
    'SweetAlert 2': 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
    'Sweetalert 2': 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
    'Tabs & Accordions': 'MENUITEMS.UIELEMENTS.LIST.TABS',
    'Typography': 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
    'Toasts': 'MENUITEMS.UIELEMENTS.LIST.TOASTS',
    'Video': 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
    'General': 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
    'Colors': 'MENUITEMS.UIELEMENTS.LIST.COLORS',
    'Rating': 'MENUITEMS.UIELEMENTS.LIST.RATING',
    'Notifications': 'MENUITEMS.UIELEMENTS.LIST.NOTIFICATION',
    'Notification': 'MENUITEMS.UIELEMENTS.LIST.NOTIFICATION',
    'Utilities': 'MENUITEMS.UIELEMENTS.LIST.UTILITIES',
    'Image Crop': 'MENUITEMS.UIELEMENTS.LIST.CROPPER',
    'Form Elements': 'MENUITEMS.FORMS.LIST.ELEMENTS',
    'Form Validation': 'MENUITEMS.FORMS.LIST.VALIDATION',
    'Form Advanced': 'MENUITEMS.FORMS.LIST.ADVANCED',
    'Advanced': 'MENUITEMS.FORMS.LIST.ADVANCED',
    'Form Editor': 'MENUITEMS.FORMS.LIST.EDITOR',
    'Form File Upload': 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
    'Form Repeater': 'MENUITEMS.FORMS.LIST.REPEATER',
    'Form Wizard': 'MENUITEMS.FORMS.LIST.WIZARD',
    'Form mask': 'MENUITEMS.FORMS.LIST.MASK',
    'Mask': 'MENUITEMS.FORMS.LIST.MASK',
    'Form Layouts': 'MENUITEMS.FORMS.LIST.LAYOUTS',
    'Basic Tables': 'MENUITEMS.TABLES.LIST.BASIC',
    'Advanced Table': 'MENUITEMS.TABLES.LIST.DataTables',
    'Apex charts': 'MENUITEMS.CHARTS.LIST.APEX',
    'Apex Chart': 'MENUITEMS.CHARTS.LIST.APEX',
    'Chartjs chart': 'MENUITEMS.CHARTS.LIST.CHARTJS',
    'Chartist chart': 'MENUITEMS.CHARTS.LIST.CHARTIST',
    'E Chart': 'MENUITEMS.CHARTS.LIST.ECHART',
    'Boxicons': 'MENUITEMS.ICONS.LIST.BOXICONS',
    'Material Design': 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
    'Dripicons': 'MENUITEMS.ICONS.LIST.DRIPICONS',
    'Font Awesome': 'MENUITEMS.ICONS.LIST.FONTAWESOME',
    'Font awesome': 'MENUITEMS.ICONS.LIST.FONTAWESOME',
    'MDI': 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
    'Leaflet Maps': 'MENUITEMS.MAPS.LIST.LEAFLETMAP',
    'AmCharts': 'MENUITEMS.MAPS.LIST.AMCHARTS',
    'AmChart': 'MENUITEMS.MAPS.LIST.AMCHARTS',
    'Jobs': 'MENUITEMS.JOBS.TEXT',
    'Jobs List': 'MENUITEMS.JOBS.LIST.JOBLIST',
    'Jobs Grid': 'MENUITEMS.JOBS.LIST.JOBGRID',
    'Job Apply': 'MENUITEMS.JOBS.LIST.APPLYJOB',
    'Job Details': 'MENUITEMS.JOBS.LIST.JOBDETAILS',
    'Job Categories': 'MENUITEMS.JOBS.LIST.JOBCATEGORIES',
    'Candidate List': 'MENUITEMS.JOBS.LIST.CANDIDATE.LIST.LIST'
  };

  constructor() { }

  ngOnInit() {
    this.resolveInputs();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.title || changes.breadcrumbItems) {
      this.resolveInputs();
    }
  }

  private resolveInputs(): void {
    this.resolvedTitle = this.resolveKey(this.title);
    this.resolvedBreadcrumbItems = (this.breadcrumbItems || []).map(item => ({
      ...item,
      label: this.resolveKey(item.label)
    }));
  }

  private resolveKey(value: string): string {
    if (!value) {
      return '';
    }
    if (value.includes('.')) {
      return value;
    }
    return this.labelKeyMap[value] || value;
  }

}
