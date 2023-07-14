import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aashiqms-github-io';

  currentHeader: number = 0;
  resumeLoaded: boolean = false;

  doc = 'https://iamaashiqms.netlify.app/assets/files/resume_aashiq_june.pdf';


  downloadResume() {
    window.open('/assets/files/resume_aashiq_june.pdf', '_blank');

  }

  changeCurrentContent(event: any) {
    this.currentHeader = event;
  }

  contentLoaded() {
    this.resumeLoaded = true;
    console.log('File loaded');
  }
}
