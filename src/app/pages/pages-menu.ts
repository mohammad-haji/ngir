import {NbMenuItem} from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'داشبورد',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'مدیریت',
    group: true,
  },
  {
    title: 'کاربران',
    icon: 'nb-keypad',
    link: '/pages/users',
    children: [
      // {
      //   title: 'افزودن کاربر جدید',
      //   link: '/pages/users/add',
      // },
      {
        title: 'لیست کاربران',
        link: '/pages/users/list',
      },
    ],
  },
  // {
  //   title: 'محصولات',
  //   icon: 'nb-title',
  //   link: '/pages/products',
  //   children: [
  //     {
  //       title: 'افزودن محصول جدید',
  //       link: '/pages/products/add',
  //     },
  //     {
  //       title: 'لیست محصولات',
  //       link: '/pages/products/list',
  //     },
  //   ],
  // },
  // {
  //   title: 'کلاس و ویژگی ها',
  //   icon: 'nb-title',
  //   link: '/pages/product-attributes',
  //   children: [
  //     // {
  //     //   title: 'افزودن کلاس و ویژگی',
  //     //   link: '/pages/product-attributes/add',
  //     // },
  //     {
  //       title: 'لیست کلاس ها',
  //       link: '/pages/product-attributes/list',
  //     },
  //   ],
  // },
  // {
  //   title: 'دسته ها',
  //   icon: 'nb-title',
  //   link: '/pages/categories',
  //   children: [
  //     {
  //       title: 'افزودن دسته جدید',
  //       link: '/pages/categories/add',
  //     },
  //     {
  //       title: 'لیست دسته ها',
  //       link: '/pages/categories/list',
  //     },
  //   ],
  // }, {
  //   title: 'تگ ها',
  //   icon: 'nb-title',
  //   link: '/pages/tags',
  //   children: [
  //     {
  //       title: 'افزودن تگ جدید',
  //       link: '/pages/tags/add',
  //     },
  //     {
  //       title: 'لیست تگ ها',
  //       link: '/pages/tags/list',
  //     },
  //   ],
  // },
  // {
  //   title: 'سفارشات',
  //   icon: 'nb-bar-chart',
  //   children: [
  //     // {
  //     //   title: 'افزودن سفارش جدید',
  //     //   link: '/pages/orders/add',
  //     // },
  //     {
  //       title: 'لیست سفارشات',
  //       link: '/pages/orders/list',
  //     },
  //   ],
  // },
  {
    title: 'دیدگاه ها',
    icon: 'nb-gear',
    children: [
      // {
      //   title: 'افزودن دیدگاه جدید',
      //   link: '/pages/reviews/add',
      // },
      {
        title: 'لیست دیدگاه ها',
        link: '/pages/reviews/list',
      },
    ],
  },
  // {
  //   title: 'تراکنش ها',
  //   icon: 'nb-bar-chart',
  //   children: [
  //     {
  //       title: 'لیست تراکنش ها',
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
