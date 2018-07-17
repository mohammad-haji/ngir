import {NbMenuItem} from '@nebular/theme';


export const MENU_ITEMS_EN: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Management',
    group: true,
  },
  {
    title: 'Users',
    icon: 'nb-keypad',
    link: '/pages/users',
    children: [
      // {
      //   title: 'Add New User',
      //   link: '/pages/users/add',
      // },
      {
        title: 'List Of Users',
        link: '/pages/users/list',
      },
    ],
  },
  // {
  //   title: 'Products',
  //   icon: 'nb-title',
  //   link: '/pages/products',
  //   children: [
  //     {
  //       title: 'Add New Product',
  //       link: '/pages/products/add',
  //     },
  //     {
  //       title: 'List Of Products',
  //       link: '/pages/products/list',
  //     },
  //   ],
  // },
  // {
  //   title: 'Product Class & Attributes',
  //   icon: 'nb-title',
  //   link: '/pages/product-attributes',
  //   children: [
  //     // {
  //     //   title: 'Add New Class & Attribute',
  //     //   link: '/pages/product-attributes/add',
  //     // },
  //     {
  //       title: 'List Of Classes',
  //       link: '/pages/product-attributes/list',
  //     },
  //   ],
  // },
  // {
  //   title: 'Categories',
  //   icon: 'nb-title',
  //   link: '/pages/categories',
  //   children: [
  //     {
  //       title: 'Add New Category',
  //       link: '/pages/categories/add',
  //     },
  //     {
  //       title: 'List Of Categories',
  //       link: '/pages/categories/list',
  //     },
  //   ],
  // },
  // {
  //   title: 'Tags',
  //   icon: 'nb-title',
  //   link: '/pages/tags',
  //   children: [
  //     {
  //       title: 'Add New Tag',
  //       link: '/pages/tags/add',
  //     },
  //     {
  //       title: 'List Of Tags',
  //       link: '/pages/tags/list',
  //     },
  //   ],
  // },
  // {
  //   title: 'Orders',
  //   icon: 'nb-bar-chart',
  //   children: [
  //     // {
  //     //   title: 'Add New Order',
  //     //   link: '/pages/orders/add',
  //     // },
  //     {
  //       title: 'List Of Orders',
  //       link: '/pages/orders/list',
  //     },
  //   ],
  // },
  {
    title: 'Reviews',
    icon: 'nb-gear',
    children: [
      // {
      //   title: 'Add New Review',
      //   link: '/pages/reviews/add',
      // },
      {
        title: 'List Of Reviews',
        link: '/pages/reviews/list',
      },
    ],
  },
  // {
  //   title: 'Transactions',
  //   icon: 'nb-bar-chart',
  //   children: [
  //     {
  //       title: 'List Of Transactions',
  //       link: '/pages/transactions/list',
  //     },
  //   ],
  // },
  // {
  //   title: 'Components',
  //   icon: 'nb-gear',
  //   children: [
  //     {
  //       title: 'Tree',
  //       link: '/pages/components/tree',
  //     }, {
  //       title: 'Notifications',
  //       link: '/pages/components/notifications',
  //     },
  //   ],
  // },
  // {
  //   title: 'Charts',
  //   icon: 'nb-bar-chart',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //     },
  //   ],
  // },
  // {
  //   title: 'Editors',
  //   icon: 'nb-title',
  //   children: [
  //     {
  //       title: 'TinyMCE',
  //       link: '/pages/editors/tinymce',
  //     },
  //     {
  //       title: 'CKEditor',
  //       link: '/pages/editors/ckeditor',
  //     },
  //   ],
  // },
];
