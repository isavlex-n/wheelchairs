import {Client, Account, Databases} from 'appwrite'

const client = new Client();

client.setEndpoint("https://wheelchairs.vercel.app").setProject("64faf902099fc912dc1a")

export const account = new Account(client)

//Database

export const databases = new Databases(client)