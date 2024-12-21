import { Component } from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-trafic',
  standalone: true,
  imports: [DashboardItemComponent],
  templateUrl: './trafic.component.html',
  styleUrl: './trafic.component.css'
})
export class TraficComponent {

  dummyTrafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];

  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
}