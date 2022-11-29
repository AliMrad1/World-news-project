import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Match } from '../Models/Match';
import { Team } from '../Models/Team';

@Injectable({
  providedIn: 'root'
})
export class WorldCupService {

  apisUrl:string = environment.apisBaseUrlWorldCup;

  constructor(private httpClient:HttpClient) { }

  //http://api.cup2022.ir/api/v1/team/
  public getAllTeamsInformation(): Observable<Team[]> {
    return this.httpClient.get<Team[]>(`${this.apisUrl}/teams`);
  }

  //http://api.cup2022.ir/api/v1/team/{id}
  public getTeamInformationById(teamId:string): Observable<Team[]> {
    return this.httpClient.get<Team[]>(`${this.apisUrl}/team/${teamId}`);
  }

  //http://api.cup2022.ir/api/v1/match
  public getAllMatchInformation(): Observable<Math[]> {
    return this.httpClient.get<Math[]>(`${this.apisUrl}/match`);
  }

  //http://api.cup2022.ir/api/v1/match/{id}
  public getAllMatchInformationById(matchID:string): Observable<Math> {
    return this.httpClient.get<Math>(`${this.apisUrl}/match/${matchID}`);
  }
  
  //http://api.cup2022.ir/api/v1/bydate
  public getMatchByDate(date: string): Observable<string> {
    return this.httpClient.post<string>(`${this.apisUrl}/bydate`, 
    {
      "date":date
    })
      .pipe();

  }

  //http://api.cup2022.ir/api/v1/standings
  public getAllTeamStandings(): Observable<any> {
    return this.httpClient.get<any>(`${this.apisUrl}/standings`);
  }

  //http://api.cup2022.ir/api/v1/standings/{group name : A,B,...}
  public getAllTeamStandingsByGroup(group:string): Observable<any> {
    return this.httpClient.get<any>(`${this.apisUrl}/standings/${group}`);
  }
}
