export class Movie {
  constructor() {
    this.moV_Key = 0;
    this.moV_Name = '';
    this.moV_DESC = '';
    this.moV_StarCount = 0;
    this.moV_ActiveStatus = 0;
    this.moV_CreatedOn = new Date();
    this.moV_ModifiedOn = new Date();
    this.moV_CreatedBy = 0;
    this.moV_ModifiedBy = 0;
    this.moV_RelaseYear = '';
    this.moV_MovieTimeInHour = 0;
    this.moV_MovieTimeInMinute = 0;
    this.moV_Origin = '';
    this.moV_MoviePost = new MoviePoster();
    this.moV_DirectedBy = '';
    this.moV_ProducedBy = '';
    this.moV_Cast = '';
    this.moV_Language = '';
    this.moV_Type = '';
    this.moV_IsFav = 0;
    this.moV_MovieImg = new MoviePoster();
    this.moV_MoviePoster = new MoviePoster();
  }

  moV_Key: number;
  moV_Name: string;
  moV_DESC: string;
  moV_StarCount: number;
  moV_ActiveStatus: number;
  moV_CreatedOn: Date;
  moV_ModifiedOn: Date;
  moV_CreatedBy: number;
  moV_ModifiedBy: number | null;
  moV_RelaseYear: string;
  moV_MovieTimeInHour: number;
  moV_MovieTimeInMinute: number;
  moV_Origin: string;
  moV_MoviePost: MoviePoster;
  moV_DirectedBy: string;
  moV_ProducedBy: string;
  moV_Cast: string;
  moV_Language: string;
  moV_Type: string;
  moV_IsFav: number;
  moV_MovieImg: MoviePoster;
  moV_MoviePoster: MoviePoster;
}

export class MoviePoster {
  constructor() {
    this.moV_IMG_Key = 0;
    this.moV_IMG_Name = '';
    this.moV_IMG_LocalPath = '';
    this.moV_ActiveStatus = 0;
    this.moV_IMG_CreatedOn = new Date();
    this.moV_IMG_ModifiedOn = new Date();
    this.moV_IMG_CreatedBy = 0;
    this.moV_IMG_ModifiedBy = 0;
  }
  moV_IMG_Key: number;
  moV_IMG_Name: string;
  moV_IMG_LocalPath: string;
  moV_ActiveStatus: number;
  moV_IMG_CreatedOn: Date;
  moV_IMG_ModifiedOn: Date;
  moV_IMG_CreatedBy: number;
  moV_IMG_ModifiedBy: number;
}

export class UserFavMovies {
  constructor() {
    this.UFM_Key = 0;
    this.UFM_Key = 0;
    this.UFM_ActiveStatus = 0;
    this.UFM_CreatedOn = new Date();
    this.UFM_ModifiedOn = new Date();
    this.UFM_UserKey = 0;
    this.UFM_moV_Key = 0;
  }

  UFM_Key: number;
  UFM_ActiveStatus: number;
  UFM_CreatedOn: Date;
  UFM_ModifiedOn: Date;
  UFM_UserKey: number;
  UFM_moV_Key: number;
}
