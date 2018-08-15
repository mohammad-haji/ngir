export const TABLE_CONFIG = {
  mode: 'external',
  add: {
    addButtonContent: '<i class="nb-plus"></i>',
    createButtonContent: '<i class="nb-checkmark"></i>',
    cancelButtonContent: '<i class="nb-close"></i>',
  },
  edit: {
    editButtonContent: '<i class="nb-edit"></i>',
    saveButtonContent: '<i class="nb-checkmark"></i>',
    cancelButtonContent: '<i class="nb-close"></i>',
    confirmSave: true
  },
  delete: {
    deleteButtonContent: '<i class="nb-trash"></i>',
    confirmDelete: true,
  },
  actions: {
    add: true,
    edit: true,
    delete: true,
  },
  columns: {
    id: {
      title: 'id',
      type: 'string',
    },
    name: {
      title: 'نام',
      type: 'string',
    },
    createdAt: {
      title: 'تاریخ ثبت نام',
      type: 'date',
    }
  },
};
