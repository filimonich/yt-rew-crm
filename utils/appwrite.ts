import { Account, Client, Databases, Storage } from "appwrite";

export const client = new Client();
const defaultValue = process.env.APP_WRITE_ID as string;

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(defaultValue);

export const account = new Account(client);
export { ID } from "appwrite";
export const DB = new Databases(client);
export const storage = new Storage(client);
