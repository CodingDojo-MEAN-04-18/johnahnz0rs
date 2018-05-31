import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private _http: HttpClient, private _dataService: DataService) {}
    getScore(username) {
        this._dataService.getScore(username.model);
        return false;
    }
    score = this._dataService.user.score;
    message = this._dataService.message;
    user = this._dataService.user;
}
