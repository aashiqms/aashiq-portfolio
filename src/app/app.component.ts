import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aashiqms-github-io';

  downloadResume() {
    window.open('/assets/files/resume_aashiq_june.pdf', '_blank');

  }
}
