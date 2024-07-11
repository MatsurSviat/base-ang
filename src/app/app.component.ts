import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { DEFAULT_LANGUAGE } from './shared/constant/language.const';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TranslateModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  translateService = inject(TranslateService);

  title = 'modus_frontend';

  ngOnInit(): void {
    this.translateService.setDefaultLang(DEFAULT_LANGUAGE);
    this.translateService.use(DEFAULT_LANGUAGE);

    console.log(environment.API_KEY);
  }
}
