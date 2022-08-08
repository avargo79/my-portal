import { Component, ElementRef, ViewChild } from '@angular/core';
import * as QRCode from 'qrcode';
//https://www.npmjs.com/package/qrcode

@Component({
  selector: 'my-portal-generate-qr-code',
  templateUrl: './generate-qr-code.component.html',
  styleUrls: ['./generate-qr-code.component.scss'],
})
export class GenerateQrCodeComponent {
  @ViewChild('canvas') canvasElement: ElementRef | undefined;

  public test() {
    QRCode.toCanvas(document.getElementById('canvas'), 'sample text', function (error: unknown) {
      if (error) console.error(error)
      console.log('success!');
    })

    // QRCode.toDataURL('I am a pony!')
    //   .then((url: unknown) => {
    //     console.log(url);
    //   })
    //   .catch((err: unknown) => {
    //     console.error(err);
    //   });
  }
}
