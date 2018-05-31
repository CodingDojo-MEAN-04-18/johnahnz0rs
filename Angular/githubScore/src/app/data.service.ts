import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
    data: BehaviorSubject<any> = new BehaviorSubject<any>(String);
    constructor(private _http: HttpClient) { }
    user = {
        username: null,
        followers: null,
        repos: null,
        score: null
    };
    message = 'test';
    getScore(username) {
        const urlString = 'https://api.github.com/users/' + username;
        // console.log(urlString);
        console.log(username);
        this._http.get(urlString).subscribe((data) => { this.user.followers = data['followers']; this.user.repos = data['public_repos']; } );
        this.user.score = Number(this.user.followers) + Number(this.user.repos);
        console.log(this.user);
        return false;
    }
}
