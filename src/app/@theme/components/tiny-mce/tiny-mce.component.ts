import {
  Component, OnDestroy, AfterViewInit, Output, EventEmitter, ElementRef, PLATFORM_ID,
  Inject
} from '@angular/core';
import {isPlatformServer} from "@angular/common";


@Component({
  selector: 'ngx-tiny-mce',
  template: '',
})
export class TinyMCEComponent implements OnDestroy, AfterViewInit {

  @Output() editorKeyup = new EventEmitter<any>();

  editor: any;
  private isServer: boolean;

  constructor(private host: ElementRef, @Inject(PLATFORM_ID) platformId,) {
    this.isServer = isPlatformServer(platformId);
  }

  ngAfterViewInit() {
    if (!this.isServer) {
      tinymce.init({
        target: this.host.nativeElement,
        // toolbar: "rtl",
        // menu: {
        //   file: {title: 'File', items: 'newdocument'},
        //   edit: {title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall'},
        //   insert: {title: 'Insert', items: 'link media | template hr'},
        //   view: {title: 'View', items: 'visualaid'},
        //   format: {
        //     title: 'Format',
        //     items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'
        //   },
        //   table: {title: 'Table', items: 'inserttable tableprops deletetable | cell row column'},
        //   tools: {title: 'Tools', items: 'spellchecker code'}
        // },
        plugins: ['link', 'paste', 'table', 'directionality'],
        skin_url: '/assets/skins/lightgray',
        setup: editor => {
          this.editor = editor;
          editor.on('keyup', () => {
            this.editorKeyup.emit(editor.getContent());
          });
        },
        height: '320',
      });
    }
  }

  ngOnDestroy() {
    if (tinymce)
      tinymce.remove(this.editor);
  }
}
