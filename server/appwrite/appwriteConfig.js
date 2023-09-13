import {Client, Account, Databases} from 'appwrite'

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("64faf902099fc912dc1a")

export const account = new Account(client)

//Database

export const databases = new Databases(client)