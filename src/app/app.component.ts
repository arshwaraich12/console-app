import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  textToCopy = 'ssh console.arshwaraich.com';
  h1color: string;
  color1: string;
  color2: string;

  constructor(
    private clipboardService: ClipboardService,
    private snackBar: MatSnackBar
  ) {
    this.color1 = '#b721ff';
    this.color2 = '#21d4fd';
    this.h1color = this.color1;
  }

  ngOnInit() {
    this.changeColor();
  }

  changeColor(): void {
    setInterval(
      () => {
        if(this.h1color === this.color1) {
          this.h1color = this.color2;
        } else {
          this.h1color = this.color1;
        }
      },
      5000
    );
  }
  
  copyToClipboard(): void {
    this.clipboardService.copyFromContent(this.textToCopy);
    this.snackBar.open(
      'Text Copied',
      'Okay',
      {
        duration: 20000
      }
    );
  }
}
