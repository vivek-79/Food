

import {Client,Databases,ID,Storage} from 'appwrite'
import conf from '../conf/conf'

class Config{

    client =new Client()
    databases
    storage
    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)

        this.databases= new Databases(this.client)
        this.storage=new Storage(this.client)
    }

//database
    //create document

    async createDocument({imageId,item,itemDescription,itemcategory,itemPrice,userId}){
        try {
            await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                imageId,
            {
                imageId,
                item,
                itemcategory,
                itemDescription,
                itemPrice,
                userId
            }
            )
        } catch (error) {
            console.log('error database',error)
            throw error
        }
    }

    //get all document

    async getAllDocument(Query){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    Query
                ]
            )
        } catch (error) {
            console.log('get all',error)
        }
    }
    //delete document

    async deleteDoc(docId){
        console.log(docId)
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                docId
            )
            return true
        } catch (error) {
            console.log(error.message)
            return false
        }
    }

    //update document

    async updateDoc(docId,{item,itemDescription,itemcategory,itemPrice,userId}){
       try {
        await this.databases.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            docId,
            {
                item,
                itemDescription,
                itemcategory,
                itemPrice,
                userId
            }
        )
       } catch (error) {
        console.log(error.message)
       }
    }

//storage

    //upload file
    async createFile(itemImage){
        try {
            return this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                itemImage
            )
        } catch (error) {
            console.log('storage create',error.message)
        }
    }

    //get file  
    
    async getFile(fileId){
       try {
        return await this.storage.getFile(
            conf.appwriteBucketId,
            fileId
        )
       } catch (error) {
        console.log('get file',error)
       }
    }

    //get all files

    async getAllFile(){
        try {
            return await this.storage.listFiles(
                conf.appwriteBucketId
            )
        } catch (error) {
            console.log('error',error)
        }
    }

    //get file preview
    async filePreview(fileId){
        try {
            const preview=this.storage.getFilePreview(
                conf.appwriteBucketId,
                fileId
            );
            if(preview && preview.href){
                return preview.href;
                
            }
            else{
                console.log('file preview invalid')
            }
        } catch (error) {
            console.log('filePreview',error)
            return false
        }
    }

    //delete file

    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log(error.message)
        }
    }
}

const config = new Config();
export default config
