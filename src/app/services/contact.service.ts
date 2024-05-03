import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ContactResponse{
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private endpointUrl = 'https://faed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws/';

  constructor(private http: HttpClient) { }

  sendData(nome: string, email: string): Observable<ContactResponse>{
    const data = {nome, email};
    console.log('Data:', data); // Log the data being sent

    return this.http.post<ContactResponse>(this.endpointUrl, data);
  }
}
