import { Injectable } from '@angular/core';
import { Storage,ref, uploadBytes,list,getDownloadURL} from '@angular/fire/storage'
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string ="";
 

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string)
  {
    const file = $event.target.files[0]
    console.log(file);
    let imgRef;
    if(name){
      imgRef = ref(this.storage,`imagen/` + name)
    }else{
      imgRef = ref(this.storage) 
    }
    console.log(imgRef);
    uploadBytes(imgRef, file)
    .then(async response  => {
      this.url =await getDownloadURL(response.ref)
     
      console.log(response);
    })
    .catch(error => console.log(error)
    )
  }


  generateUUID(){
    return uuidv4();
  }
  
  getImages(){
    const imagesRef = ref(this.storage, 'imagen')
    list(imagesRef)
    .then(async response => {
      for (let iten of response.items){
        this.url =await getDownloadURL(iten)
        console.log("la url es :"+ this.url)
      }
    })
    .catch(error => console.log(error))
   }

   clearUrl() {
    this.url = "";
   
  }
}