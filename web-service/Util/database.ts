import {MongoClient} from "mongodb";

declare global {
    var _mongo: Promise<MongoClient>;
}

const url = process.env.NODE_VALUE_DB_URL ?? "1234"

let connectDB: Promise<MongoClient>

if (process.env.NODE_ENV === "development") {
    if (!global._mongo) {
        global._mongo = new MongoClient(url).connect()
    }
    connectDB = global._mongo
} else {
    connectDB = new MongoClient(url).connect()
}

export {connectDB}