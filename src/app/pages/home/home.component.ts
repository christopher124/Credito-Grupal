import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../../assets/css/style.css'],
})
export class HomeComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Inicio - Credito grupal');

    (function (d, m) {
      var kommunicateSettings = {
        appId: '30bdff16bdc61e5c6768edda693d043a',
        popupWidget: true,
        automaticChatOpenOnNavigation: true,
      };
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
      var h = document.getElementsByTagName('head')[0];
      h.appendChild(s);
      (window as any).kommunicate = m;
      m._globals = kommunicateSettings;
    })(document, (window as any).kommunicate || {});
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
