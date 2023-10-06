import { Component } from '@angular/core';
import { Provider } from './provider';
import { ProviderService } from './provider.service';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.css']
})
export class ProviderComponent {

  providers: Provider[] = [];

  constructor(private providerService: ProviderService){}

  ngOnInit(){
    this.providerService.getProvider().subscribe(
    providers => this.providers = providers

    );

  }

}
