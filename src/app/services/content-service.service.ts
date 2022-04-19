import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FSContent, Doctors, Rating, FooterLink } from '../model/model';

@Injectable({
  providedIn: 'root',
})
export class ContentServiceService {
  getFSConctent = (): Observable<FSContent[]> => {
    return this._http.get<FSContent[]>('../../assets/fast-solutions.json');
  };

  getAvailableDoctors = (): Observable<Doctors[]> => {
    return this._http.get<Doctors[]>('../../assets/available-doctors.json');
  };

  getRatings = (): Observable<Rating[]> => {
    return this._http.get<Rating[]>('../../assets/ratings.json');
  };

  getFooterLinks = (): Observable<FooterLink[]> => {
    return this._http.get<FooterLink[]>('../../assets/footer-links.json');
  };

  constructor(private _http: HttpClient) {}
}
