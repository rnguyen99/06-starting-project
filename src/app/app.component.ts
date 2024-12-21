import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './daskboard/server-status/server-status.component';
import { TicketComponent } from './daskboard/ticket/ticket.component';
import { TraficComponent } from './daskboard/trafic/trafic.component';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ServerStatusComponent, TicketComponent, TraficComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

 
}
