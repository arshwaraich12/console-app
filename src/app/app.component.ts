import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard'
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  textToCopy = 'ssh [user]@console.arshwaraich.com';
  h1color: string;
  color1: string;
  color2: string;

  hostname: string;
  username: string;
  password: string;

  constructor(
    private clipboardService: ClipboardService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.color1 = '#b721ff';
    this.color2 = '#21d4fd';
    this.h1color = this.color1;

    this.hostname = 'console.arshwaraich.com';
    this.username = 'arshwaraich';
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
        duration: 2000
      }
    );
  }

  redirectToShell(): void {
    window.location.href = 'https://shell.arshwaraich.com' +
    '/?hostname=' + this.hostname +
    '&username=' + this.username + 
    '&password=' + btoa(this.password);
  }
}
