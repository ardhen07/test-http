import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public baseUrl ="http://localhost:8080";
  products: any[];

  constructor(private httpClient: HttpClient) {}

  get_products(){
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain'});
    this.httpClient.get(this.baseUrl + '/hic/allusers').subscribe((res : any[])=>{
    console.log(res);
    this.products = res;
    });
}
}
