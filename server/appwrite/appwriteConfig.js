import {Client, Account, Databases} from 'appwrite'

const client = new Client();

client.setEndpoint("http://wheelchairs.vercel.app").setProject("64faf902099fc912dc1a")

export const account = new Account(client)

//Database

export const databases = new Databases(client, "65000d86362b9fafc2b1")