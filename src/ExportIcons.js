
import { weatherImages } from "./Images";

  export const getIcon = (icon) => {    // conditional statements for our 3d weather icons   

    if(icon === '01d') {
      return weatherImages.sunny;
    } else if(icon === '02d') {
      return weatherImages.cloudy;
    }else if(icon === '03d'){
      return weatherImages.satteredClouds;
    }else if(icon === '04d'){
      return weatherImages.satteredClouds
    }else if (icon === '09d'){
      return weatherImages.rainy;
    }else if (icon === '10d'){
      return weatherImages.rainy;
    }else if (icon === '11d'){
      return weatherImages.thunderstroms;
    }else if (icon === '13d'){
      return weatherImages.snow; 
    }else if (icon === '50d'){
      return weatherImages.fog;
    }else if (icon === '01n'){
      return weatherImages.clearskyNight;
    }else if (icon === '02n'){
      return weatherImages.cloudyNight;
    }else if (icon === '03n'){
      return weatherImages.satteredClouds
    }else if (icon === '04n'){
      return weatherImages.satteredClouds;
    }else if (icon === '09n'){
      return weatherImages.nightRain;
    }else if (icon === '10n'){
      return weatherImages.nightRain;
    }else if (icon === '11n'){
      return weatherImages.nightThunderstroms;
    }else if (icon === '13n'){
      return weatherImages.snow
    }else if (icon === '50n'){
      return weatherImages.fog
    }
  }