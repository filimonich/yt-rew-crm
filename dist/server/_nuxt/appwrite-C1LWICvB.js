import { Client, Account, Databases, Storage } from "appwrite";
const APP_WRITE_ID = "yt-rew-crm";
const DB_ID = "crm-db";
const COLLECTION_DEALS = "deals";
const COLLECTION_CUSTOMERS = "customers";
const COLLECTION_COMMENTS = "comments";
const STORAGE_ID = "storage";
const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject(APP_WRITE_ID);
const account = new Account(client);
const DB = new Databases(client);
const storage = new Storage(client);
export {
  COLLECTION_CUSTOMERS as C,
  DB as D,
  STORAGE_ID as S,
  DB_ID as a,
  COLLECTION_DEALS as b,
  COLLECTION_COMMENTS as c,
  account as d,
  storage as s
};
//# sourceMappingURL=appwrite-C1LWICvB.js.map
