import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lsc-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  constructor() { }

  fileBase64: any = null;

  ngOnInit(): void {
  }

  fileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.fileBase64 = reader.result;
    }
  }

  toClipboard() {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData?.setData('text/plain', this.fileBase64)
      e.preventDefault();

    });
    document.execCommand('copy');

    alert('Base64 Copiada')

  }

}
