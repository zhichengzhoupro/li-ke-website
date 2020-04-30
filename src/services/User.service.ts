import BaseHttpService from "./BasicHttp.service";

export default class UserService extends BaseHttpService {

    async signIn(username: string, password: string, isRememberMe: boolean) {
        const result: any = await this.post('user/signin', {username, password});
        this.saveToken(result.data.accessToken);
        return result.data.user;
    }

    async signUp(userInfo: any) {
        const result: any = await this.post('user/signup', {...userInfo});

        return result.data;
    }

    async getCurrentUser() {
        const result: any = await this.get('user/user');
        if(result) {
            return result.data;
        }

    }

    async getUserById(id: string) {
        const result: any = await this.get(`user/edit/${id}`);
        if(result) {
            return result.data;
        }

    }

    async getUsers() {
        const result: any = await this.get('user/list');
        if(result) {
            return result.data;
        }
        return [];
    }

    async signout() {
        //const result: any = await this.get('user/signout');
    }


    saveToken = (accessToken: string) => {
        localStorage.setItem('accessToken', accessToken);
    };

}
