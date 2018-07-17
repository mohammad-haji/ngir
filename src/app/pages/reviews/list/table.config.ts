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
    delete: false
  },
  columns: {
    title: {
      title: 'عنوان',
      type: 'string',
    },
    status: {
      title: 'وضعیت',
      type: 'string',
    },
    created: {
      title: 'تاریخ ثبت نام',
      type: 'date',
    },
  },
};
