import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  sendemail(data: { to: string; subject: string; message: string; }) {
    throw new Error('Method not implemented.');
  }
  sendEmail(data: { to: string; subject: string; message: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  list(): Observable<any> {

    return this.http.get(`${environment.apibaseUrl}admin`);
  }


// sendemail(data:any)
//   {
//     this.http.post('${this.baseurl}/sendmail')


//   }
}
