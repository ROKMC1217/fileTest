import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClientModule, HttpClient} from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  private file : File;
  // private url : string = "http://www.localhost:3000/upload";
  private url : string = "http://www.mythos.ml:1584/";

  constructor(public navCtrl: NavController, private http: HttpClient) { }

  onFileChange(event) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  
  async submitForm() {
    console.log(':::1');
    let formData = new FormData();
    formData.append('data', this.file, this.file.name);
    console.log(':::2');
    this.http.post(this.url, formData).subscribe(
      (response) => {   // 성공하면 여기 안탑니다.
        console.log(':::3');
        console.log(response);
      },
      (error) => {      // 실패하면 여기 탑니다.
        console.log(':::4');
        console.log(error);
      }
      );
  }
  
  
  /*
  async submitForm() {
    this.http.post(this.url, "hi").subscribe(
      (response) => {
        console.log(':::3');
        console.log(response);
      },
      (error) => {
        console.log(':::4');
        console.log(error);
      }
      );
  }
  */
}
