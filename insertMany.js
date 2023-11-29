const { MongoClient } = require("mongodb");
// 下のURIをご自分の値に変更してください
const uri = "mongodb+srv://p19981005:19981005@test.pu3loen.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
const database = client.db('notes');
const notes = database.collection('notes');
// データを登録
const query = [{
id: 1,
title: 'ノート１のタイトルです',
subTitle: 'ノート１のサブタイトルです',
bodyText: 'ノート１の本文です'
},
{
id: 2,
title: 'ノート２のタイトルです',
subTitle: 'ノート２のサブタイトルです',
bodyText: 'ノート２の本文です'
}];
const note = await notes.insertMany(query);
console.log(note);
// 最後にクロースする
await client.close();
}
run()
