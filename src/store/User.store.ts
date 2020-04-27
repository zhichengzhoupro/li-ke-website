import {action, observable} from "mobx";
import UserService from "../services/User.service";

export default class UserStore {

    @observable user: any = {};

    @observable count = localStorage.getItem('user');

    @observable isAuthenticated = false;

    private userService: UserService;

    constructor(userService: UserService) {
        this.userService = userService;
    }

    @action
    signInHandler = async (userInfo: any) => {
        this.user = await this.userService.signIn(userInfo.email, userInfo.password, true);
        this.saveUserIfRemember(true, this.user);
        this.isAuthenticated = true;
    };

    @action
    signUpHandler = async (userInfo: any) => {
      return  await this.userService.signUp({...userInfo});
    };

    @action
    signOutHandler = async () => {
       await this.userService.signout()
            .then((data) => {


            });

        this.user = null;
        this.removeUser();
    };


    @action
    removeToken = () => {
        localStorage.removeItem('accessToken');
        sessionStorage.removeItem('accessToken');
    };

    @action
    removeUser = () => {
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
    };

    @action
    saveUserIfRemember = (isRememberMe: boolean, user: any) => {
        if (isRememberMe) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            sessionStorage.setItem('user', JSON.stringify(user));
        }
    };

     getUserById = async (id: string) => {
        return await this.userService.getUserById(id);
    }

    getUsers = async() => {
         return await this.userService.getUsers();
    }

}
