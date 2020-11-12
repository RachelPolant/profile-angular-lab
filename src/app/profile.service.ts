import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'Rachel Polant',
    contact: 'ruchelah@gmail.com',
    bio: 'I like mashed potatoes a lot',
  };

  constructor() {}

  getUserProfile = () => {
    return this.userProfile;
  };
  setUserProfile = (newUserProfile:UserProfile)=> {
    this.userProfile = newUserProfile;

  }
}
