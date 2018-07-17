export const TABLE_CONFIG = {
  add: {
    addButtonContent: '<i class="nb-plus"></i>',
    createButtonContent: '<i class="nb-checkmark"></i>',
    cancelButtonContent: '<i class="nb-close"></i>',
  },
  edit: {
    editButtonContent: '<i class="nb-edit"></i>',
    saveButtonContent: '<i class="nb-checkmark"></i>',
    cancelButtonContent: '<i class="nb-close"></i>',
  },
  delete: {
    deleteButtonContent: '<i class="nb-trash"></i>',
    confirmDelete: true,
  },
  actions: {
    add: false,
    edit: false,
    delete: false,
  },
  columns: {
    username: {
      title: 'نام کاربری',
      type: 'string',
    },
    firstName: {
      title: 'نام',
      type: 'string',
    },
    lastName: {
      title: 'نام خانوادگی',
      type: 'string',
    },
    provider: {
      title: 'نحوه ورود',
      type: 'string',
    },
    created: {
      title: 'تاریخ ثبت نام',
      type: 'date',
    },
    email: {
      title: 'ایمیل',
      type: 'string',
    },
  },
};
