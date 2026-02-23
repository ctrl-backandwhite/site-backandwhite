import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 8,
        isLayout: true
    },
    {
        id: 9,
        label: 'MENUITEMS.APPS.TEXT',
        isTitle: true
    },
    {
        id: 10,
        label: 'MENUITEMS.CALENDAR.TEXT',
        icon: 'bx-calendar',
        link: '/dashboard/calendar',
        hideWithoutFlag: true
    },
    {
        id: 11,
        label: 'MENUITEMS.CHAT.TEXT',
        icon: 'bx-chat',
        link: '/dashboard/chat',
        hideWithoutFlag: true
    },
    {
        id: 12,
        label: 'MENUITEMS.FILEMANAGER.TEXT',
        icon: 'bx-file',
        link: '/dashboard/filemanager',
        hideWithoutFlag: true
    },
    {
        id: 40,
        label: 'MENUITEMS.PROJECTS.TEXT',
        icon: 'bx-briefcase-alt-2',
        subItems: [
            {
                id: 41,
                label: 'MENUITEMS.PROJECTS.LIST.GRID',
                link: '/dashboard/projects/grid',
                parentId: 40
            },
            {
                id: 42,
                label: 'MENUITEMS.PROJECTS.LIST.PROJECTLIST',
                link: '/dashboard/projects/list',
                parentId: 40
            },
            {
                id: 43,
                label: 'MENUITEMS.PROJECTS.LIST.OVERVIEW',
                link: '/dashboard/projects/overview',
                parentId: 40
            },
            {
                id: 44,
                label: 'MENUITEMS.PROJECTS.LIST.CREATE',
                link: '/dashboard/projects/create',
                parentId: 40
            }
        ]
    },
    {
        id: 45,
        label: 'MENUITEMS.TASKS.TEXT',
        icon: 'bx-task',
        subItems: [
            {
                id: 46,
                label: 'MENUITEMS.TASKS.LIST.TASKLIST',
                link: '/dashboard/tasks/list',
                parentId: 45
            },
            {
                id: 47,
                label: 'MENUITEMS.TASKS.LIST.KANBAN',
                link: '/dashboard/tasks/kanban',
                parentId: 45
            },
            {
                id: 48,
                label: 'MENUITEMS.TASKS.LIST.CREATETASK',
                link: '/dashboard/tasks/create',
                parentId: 45
            }
        ]
    },
    {
        id: 13,
        label: 'MENUITEMS.ECOMMERCE.TEXT',
        icon: 'bx-store',
        subItems: [
            {
                id: 14,
                label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
                link: '/dashboard/ecommerce/products',
                parentId: 13
            },
            {
                id: 15,
                label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTDETAIL',
                link: '/dashboard/ecommerce/product-detail/1',
                parentId: 13
            },
            {
                id: 16,
                label: 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
                link: '/dashboard/ecommerce/orders',
                parentId: 13
            },
            {
                id: 17,
                label: 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
                link: '/dashboard/ecommerce/customers',
                parentId: 13
            },
            {
                id: 18,
                label: 'MENUITEMS.ECOMMERCE.LIST.CART',
                link: '/dashboard/ecommerce/cart',
                parentId: 13
            },
            {
                id: 19,
                label: 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
                link: '/dashboard/ecommerce/checkout',
                parentId: 13
            },
            {
                id: 20,
                label: 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
                link: '/dashboard/ecommerce/shops',
                parentId: 13
            },
            {
                id: 21,
                label: 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
                link: '/dashboard/ecommerce/add-product',
                parentId: 13
            },
        ]
    },
    {
        id: 22,
        label: 'MENUITEMS.CRYPTO.TEXT',
        icon: 'bx-bitcoin',
        hideWithoutFlag: true,
        subItems: [
            {
                id: 23,
                label: 'MENUITEMS.CRYPTO.LIST.WALLET',
                link: '/dashboard/crypto/wallet',
                parentId: 22
            },
            {
                id: 24,
                label: 'MENUITEMS.CRYPTO.LIST.BUY/SELL',
                link: '/dashboard/crypto/buy-sell',
                parentId: 22
            },
            {
                id: 25,
                label: 'MENUITEMS.CRYPTO.LIST.EXCHANGE',
                link: '/dashboard/crypto/exchange',
                parentId: 22
            },
            {
                id: 26,
                label: 'MENUITEMS.CRYPTO.LIST.LENDING',
                link: '/dashboard/crypto/lending',
                parentId: 22
            },
            {
                id: 27,
                label: 'MENUITEMS.CRYPTO.LIST.ORDERS',
                link: '/dashboard/crypto/orders',
                parentId: 22
            },
            {
                id: 28,
                label: 'MENUITEMS.CRYPTO.LIST.KYCAPPLICATION',
                link: '/dashboard/crypto/kyc-application',
                parentId: 22
            },
            {
                id: 29,
                label: 'MENUITEMS.CRYPTO.LIST.ICOLANDING',
                link: '/crypto-ico-landing',
                parentId: 22
            }
        ]
    },
    {
        id: 30,
        label: 'MENUITEMS.EMAIL.TEXT',
        icon: 'bx-envelope',
        hideWithoutFlag: true,
        subItems: [
            {
                id: 31,
                label: 'MENUITEMS.EMAIL.LIST.INBOX',
                link: '/dashboard/email/inbox',
                parentId: 30
            },
            {
                id: 32,
                label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
                link: '/dashboard/email/read/1',
                parentId: 30
            },
            {
                id: 33,
                label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.TEXT',
                badge: {
                    variant: 'success',
                    text: 'MENUITEMS.EMAIL.LIST.TEMPLATE.BADGE',
                },
                parentId: 30,
                subItems: [
                    {
                        id: 34,
                        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BASIC',
                        link: '/dashboard/email/basic',
                        parentId: 30
                    },
                    {
                        id: 35,
                        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.ALERT',
                        link: '/dashboard/email/alert',
                        parentId: 30
                    },
                    {
                        id: 36,
                        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BILLING',
                        link: '/dashboard/email/billing',
                        parentId: 30
                    }
                ]
            }
        ]
    },
    {
        id: 37,
        label: 'MENUITEMS.INVOICES.TEXT',
        icon: 'bx-receipt',
        hideWithoutFlag: true,
        subItems: [
            {
                id: 38,
                label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
                link: '/dashboard/invoices/list',
                parentId: 37
            },
            {
                id: 39,
                label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
                link: '/dashboard/invoices/detail',
                parentId: 37
            },
        ]
    },
    {
        id: 49,
        label: 'MENUITEMS.CONTACTS.TEXT',
        icon: 'bxs-user-detail',
        hideWithoutFlag: true,
        subItems: [
            {
                id: 50,
                label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
                link: '/dashboard/contacts/grid',
                parentId: 49
            },
            {
                id: 51,
                label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
                link: '/dashboard/contacts/list',
                parentId: 49
            },
            {
                id: 52,
                label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
                link: '/dashboard/contacts/profile',
                parentId: 49
            }
        ]
    },
    {
        id: 53,
        label: 'MENUITEMS.BLOG.TEXT',
        icon: 'bx-file',
        hideWithoutFlag: true,
        subItems: [
            {
                id: 54,
                label: 'MENUITEMS.BLOG.LIST.BLOGLIST',
                link: '/dashboard/blog/list',
                parentId: 53
            },
            {
                id: 55,
                label: 'MENUITEMS.BLOG.LIST.BLOGGRID',
                link: '/dashboard/blog/grid',
                parentId: 53
            },
            {
                id: 56,
                label: 'MENUITEMS.BLOG.LIST.DETAIL',
                link: '/dashboard/blog/detail',
                parentId: 53
            },
        ]
    },
    {
        id: 57,
        label: 'MENUITEMS.JOBS.TEXT',
        icon: 'bx-briefcase-alt',
        hideWithoutFlag: true,
        subItems: [
            {
                id: 58,
                label: 'MENUITEMS.JOBS.LIST.JOBLIST',
                link: '/dashboard/jobs/list',
                parentId: 57
            },
            {
                id: 59,
                label: 'MENUITEMS.JOBS.LIST.JOBGRID',
                link: '/dashboard/jobs/grid',
                parentId: 57
            },
            {
                id: 60,
                label: 'MENUITEMS.JOBS.LIST.APPLYJOB',
                link: '/dashboard/jobs/apply',
                parentId: 57
            },
            {
                id: 61,
                label: 'MENUITEMS.JOBS.LIST.JOBDETAILS',
                link: '/dashboard/jobs/details',
                parentId: 57
            },
            {
                id: 62,
                label: 'MENUITEMS.JOBS.LIST.JOBCATEGORIES',
                link: '/dashboard/jobs/categories',
                parentId: 57
            },
            {
                id: 63,
                label: 'MENUITEMS.JOBS.LIST.CANDIDATE.TEXT',
                badge: {
                    variant: 'success',
                    text: 'MENUITEMS.EMAIL.LIST.TEMPLATE.BADGE',
                },
                parentId: 57,
                subItems: [
                    {
                        id: 64,
                        label: 'MENUITEMS.JOBS.LIST.CANDIDATE.LIST.LIST',
                        link: '/dashboard/jobs/candidate-list',
                        parentId: 57
                    },
                    {
                        id: 65,
                        label: 'MENUITEMS.JOBS.LIST.CANDIDATE.LIST.OVERVIEW',
                        link: '/dashboard/jobs/candidate-overview',
                        parentId: 57
                    }
                ]
            }
        ]
    },
    {
        id: 66,
        label: 'MENUITEMS.PAGES.TEXT',
        isTitle: true,
        hideWithoutFlag: true
    },
    {
        id: 67,
        label: 'MENUITEMS.AUTHENTICATION.TEXT',
        icon: 'bx-user-circle',
        hideWithoutFlag: true,
        subItems: [
            {
                id: 68,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
                link: '/auth/login',
                parentId: 67
            },
            {
                id: 69,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN2',
                link: '/auth/login-2',
                parentId: 67
            },
            {
                id: 70,
                label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
                link: '/auth/signup',
                parentId: 67
            },
            {
                id: 71,
                label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER2',
                link: '/auth/signup-2',
                parentId: 67
            },
            {
                id: 72,
                label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
                link: '/auth/reset-password',
                parentId: 67
            },
            {
                id: 73,
                label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD2',
                link: '/auth/recoverpwd-2',
                parentId: 67
            },
            {
                id: 74,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                link: '/pages/lock-screen-1',
                parentId: 67
            },
            {
                id: 75,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN2',
                link: '/pages/lock-screen-2',
                parentId: 67
            },
            {
                id: 76,
                label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL',
                link: '/pages/confirm-mail',
                parentId: 67
            },
            {
                id: 77,
                label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL2',
                link: '/pages/confirm-mail-2',
                parentId: 67
            },
            {
                id: 78,
                label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION',
                link: '/pages/email-verification',
                parentId: 67
            },
            {
                id: 79,
                label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION2',
                link: '/pages/email-verification-2',
                parentId: 67
            },
            {
                id: 80,
                label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
                link: '/pages/two-step-verification',
                parentId: 67
            },
            {
                id: 81,
                label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION2',
                link: '/pages/two-step-verification-2',
                parentId: 67
            }
        ]
    },
    {
        id: 82,
        label: 'MENUITEMS.UTILITY.TEXT',
        icon: 'bx-file',
        hideWithoutFlag: true,
        subItems: [
            {
                id: 83,
                label: 'MENUITEMS.UTILITY.LIST.STARTER',
                link: '/pages/starter',
                parentId: 82
            },
            {
                id: 84,
                label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
                link: '/pages/maintenance',
                parentId: 82
            },
            {
                id: 85,
                label: 'Coming Soon',
                link: '/pages/coming-soon',
                parentId: 82
            },
            {
                id: 86,
                label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
                link: '/pages/timeline',
                parentId: 82
            },
            {
                id: 87,
                label: 'MENUITEMS.UTILITY.LIST.FAQS',
                link: '/pages/faqs',
                parentId: 82
            },
            {
                id: 88,
                label: 'MENUITEMS.UTILITY.LIST.PRICING',
                link: '/pages/pricing',
                parentId: 82
            },
            {
                id: 89,
                label: 'MENUITEMS.UTILITY.LIST.ERROR404',
                link: '/pages/404',
                parentId: 82
            },
            {
                id: 90,
                label: 'MENUITEMS.UTILITY.LIST.ERROR500',
                link: '/pages/500',
                parentId: 82
            },
        ]
    },
    {
        id: 91,
        label: 'MENUITEMS.COMPONENTS.TEXT',
        isTitle: true,
        hideWithoutFlag: true
    },
    {
        id: 92,
        label: 'MENUITEMS.UIELEMENTS.TEXT',
        icon: 'bx-tone',
        hideWithoutFlag: true,
        subItems: [
            {
                id: 93,
                label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
                link: '/dashboard/ui/alerts',
                parentId: 92
            },
            {
                id: 94,
                label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
                link: '/dashboard/ui/buttons',
                parentId: 92
            },
            {
                id: 95,
                label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
                link: '/dashboard/ui/cards',
                parentId: 92
            },
            {
                id: 96,
                label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
                link: '/dashboard/ui/carousel',
                parentId: 92
            },
            {
                id: 97,
                label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
                link: '/dashboard/ui/dropdowns',
                parentId: 92
            },
            {
                id: 98,
                label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
                link: '/dashboard/ui/grid',
                parentId: 92
            },
            {
                id: 99,
                label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
                link: '/dashboard/ui/images',
                parentId: 92
            },
            {
                id: 100,
                label: 'MENUITEMS.UIELEMENTS.LIST.LIGHTBOX',
                link: '/dashboard/ui/lightbox',
                parentId: 92
            },
            {
                id: 101,
                label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
                link: '/dashboard/ui/modals',
                parentId: 92
            },
            {
                id: 102,
                label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
                link: '/dashboard/ui/rangeslider',
                parentId: 92
            },
            {
                id: 103,
                label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
                link: '/dashboard/ui/progressbar',
                parentId: 92
            },
            {
                id: 104,
                label: 'MENUITEMS.UIELEMENTS.LIST.PLACEHOLDER',
                link: '/dashboard/ui/placeholder',
                parentId: 92
            },
            {
                id: 105,
                label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
                link: '/dashboard/ui/sweet-alert',
                parentId: 92
            },
            {
                id: 106,
                label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
                link: '/dashboard/ui/tabs-accordions',
                parentId: 92
            },
            {
                id: 107,
                label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
                link: '/dashboard/ui/typography',
                parentId: 92
            },
            {
                id: 108,
                label: 'MENUITEMS.UIELEMENTS.LIST.TOASTS',
                link: '/dashboard/ui/toasts',
                parentId: 92
            },
            {
                id: 109,
                label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
                link: '/dashboard/ui/video',
                parentId: 92
            },
            {
                id: 110,
                label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
                link: '/dashboard/ui/general',
                parentId: 92
            },
            {
                id: 111,
                label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
                link: '/dashboard/ui/colors',
                parentId: 92
            },
            {
                id: 112,
                label: 'MENUITEMS.UIELEMENTS.LIST.RATING',
                link: '/dashboard/ui/rating',
                parentId: 92
            },
            {
                id: 113,
                label: 'MENUITEMS.UIELEMENTS.LIST.NOTIFICATION',
                link: '/dashboard/ui/notification',
                parentId: 92
            },
            {
                id: 114,
                label: 'MENUITEMS.UIELEMENTS.LIST.UTILITIES',
                link: '/dashboard/ui/utilities',
                parentId: 92
            },
            {
                id: 115,
                label: 'MENUITEMS.UIELEMENTS.LIST.CROPPER',
                link: '/dashboard/ui/image-crop',
                parentId: 92
            },
        ]
    },
    {
        id: 116,
        label: 'MENUITEMS.FORMS.TEXT',
        icon: 'bxs-eraser',
        hideWithoutFlag: true,
        badge: {
            variant: 'danger',
            text: 'MENUITEMS.FORMS.BADGE',
        },
        subItems: [
            {
                id: 117,
                label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                link: '/dashboard/form/elements',
                parentId: 116
            },
            {
                id: 118,
                label: 'MENUITEMS.FORMS.LIST.LAYOUTS',
                link: '/dashboard/form/layouts',
                parentId: 116
            },
            {
                id: 119,
                label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                link: '/dashboard/form/validation',
                parentId: 116
            },
            {
                id: 120,
                label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                link: '/dashboard/form/advanced',
                parentId: 116
            },
            {
                id: 121,
                label: 'MENUITEMS.FORMS.LIST.EDITOR',
                link: '/dashboard/form/editor',
                parentId: 116
            },
            {
                id: 122,
                label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
                link: '/dashboard/form/uploads',
                parentId: 116
            },
            {
                id: 123,
                label: 'MENUITEMS.FORMS.LIST.REPEATER',
                link: '/dashboard/form/repeater',
                parentId: 116
            },
            {
                id: 124,
                label: 'MENUITEMS.FORMS.LIST.WIZARD',
                link: '/dashboard/form/wizard',
                parentId: 116
            },
            {
                id: 125,
                label: 'MENUITEMS.FORMS.LIST.MASK',
                link: '/dashboard/form/mask',
                parentId: 116
            }
        ]
    },
    {
        id: 126,
        icon: 'bx-list-ul',
        label: 'MENUITEMS.TABLES.TEXT',
        hideWithoutFlag: true,
        subItems: [
            {
                id: 127,
                label: 'MENUITEMS.TABLES.LIST.BASIC',
                link: '/dashboard/tables/basic',
                parentId: 126
            },
            {
                id: 128,
                label: 'MENUITEMS.TABLES.LIST.DataTables',
                link: '/dashboard/tables/advanced',
                parentId: 126
            }
        ]
    },
    {
        id: 130,
        icon: 'bxs-bar-chart-alt-2',
        label: 'MENUITEMS.CHARTS.TEXT',
        hideWithoutFlag: true,
        subItems: [
            {
                id: 131,
                label: 'MENUITEMS.CHARTS.LIST.APEX',
                link: '/dashboard/charts/apex',
                parentId: 130
            },
            {
                id: 132,
                label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
                link: '/dashboard/charts/chartjs',
                parentId: 131
            },
            {
                id: 133,
                label: 'MENUITEMS.CHARTS.LIST.CHARTIST',
                link: '/dashboard/charts/chartist',
                parentId: 131
            },
            {
                id: 134,
                label: 'MENUITEMS.CHARTS.LIST.ECHART',
                link: '/dashboard/charts/echart',
                parentId: 131
            }
        ]
    },
    {
        id: 135,
        label: 'MENUITEMS.ICONS.TEXT',
        icon: 'bx-aperture',
        hideWithoutFlag: true,
        subItems: [
            {
                id: 136,
                label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                link: '/dashboard/icons/boxicons',
                parentId: 135
            },
            {
                id: 137,
                label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                link: '/dashboard/icons/materialdesign',
                parentId: 135
            },
            {
                id: 138,
                label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
                link: '/dashboard/icons/dripicons',
                parentId: 135
            },
            {
                id: 139,
                label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
                link: '/dashboard/icons/fontawesome',
                parentId: 135
            },
        ]
    },
    {
        id: 140,
        label: 'MENUITEMS.MAPS.TEXT',
        icon: 'bx-map',
        hideWithoutFlag: true,
        subItems: [
            {
                id: 142,
                label: 'MENUITEMS.MAPS.LIST.LEAFLETMAP',
                link: '/dashboard/maps/leaflet',
                parentId: 140
            },
            {
                id: 142,
                label: 'MENUITEMS.MAPS.LIST.AMCHARTS',
                link: '/dashboard/maps/AmChart',
                parentId: 140
            }
        ]
    },
    {
        id: 148,
        label: 'DAO.TITLE',
        icon: 'bx-building',
        link: '/dashboard/dao',
        hideWithoutFlag: true
    },
    {
        id: 143,
        label: 'MENUITEMS.MULTILEVEL.TEXT',
        icon: 'bx-share-alt',
        hideWithoutFlag: true,
        subItems: [
            {
                id: 144,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
                parentId: 143
            },
            {
                id: 145,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
                parentId: 143,
                subItems: [
                    {
                        id: 146,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
                        parentId: 145,
                    },
                    {
                        id: 147,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
                        parentId: 145,
                    }
                ]
            },
        ]
    }
];

