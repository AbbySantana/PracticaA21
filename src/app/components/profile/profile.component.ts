import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github/github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: any = [];
  public repos: any = [];

  public username: string;

  constructor(private _githubService: GithubService) {
    this.user = false;
  }

  searchUser() {
    this._githubService.updateUser(this.username);

    this._githubService.getUser().subscribe(user => {
      this.user = user;
    })

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    })
  }

  ngOnInit() {
  }

}

