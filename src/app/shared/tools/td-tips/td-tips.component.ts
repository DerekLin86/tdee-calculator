import { Component, OnInit } from '@angular/core';

const domainName = 'https://my-dev-developer-edition.ap16.force.com/CaloriesControl';

declare var getTdeeSharedStaticResourceRoot: () => string;

export function getTdeeSharedStaticResource(resourcePath: string) {
  return domainName +
    getTdeeSharedStaticResourceRoot() + '/' + resourcePath;
}

@Component({
  selector: 'app-td-tips',
  templateUrl: './td-tips.component.html',
  styleUrls: ['./td-tips.component.scss']
})
export class TdTipsComponent implements OnInit {

  constructor() { }

  public viewModel = {
    tipPersonIcon: getTdeeSharedStaticResource('tip-person.png')
  };

  ngOnInit() {
  }

}
