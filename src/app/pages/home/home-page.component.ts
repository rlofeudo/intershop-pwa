import { ChangeDetectionStrategy, Component } from '@angular/core';
import { interval } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'ish-home-page',
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  inter$ = interval(300).pipe(shareReplay(1));
}
