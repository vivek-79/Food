
import {Client,Account,ID} from 'appwrite'
import conf from '../conf/conf'

 class AuthService {

    client=new Client()
    account
    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.account=new Account(this.client)
    }
    //sign up

    async signUp({email,password,userName,phone=''}){
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                userName
            )
            if(userAccount){
                return this.login({email,password})
                
            }
            else{
                return userAccount
            }
        } catch (error) {
            console.log('signUp',error.message)
            throw error
        }
    }

    //login

    async login({email,password}){
        try {
             return await this.account.createEmailPasswordSession(
                email,
                password
            )
        } catch (error) {
            throw error
        }
    }

    //logout

    async logOut(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log('logout error')
        }
    }

    //get current user

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log('get account mc',error)
        }
        return null;
    }

    //seller

    async update({phone}){
         const result= await this.account.updatePrefs(
            {phone:phone}
        )
        return result
    }
}

const authService =new AuthService()
export default authService;