import * as express from "express";
import * as mysql from "mysql";
export const dataController = express.Router();

const connection = mysql.createConnection({
    host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
    user: 'test-read',
    password: 'xnxPp6QfZbCYkY8',
    database: 'birdietest'
  });


  connection.connect((err: any) => {
    if (err) throw err;
    console.log('Connected!');
  });

dataController.get('/patients', async (_, res) => {

    connection.query('SELECT distinct care_recipient_id FROM events',async (err, result) =>
     {
        if (err) throw err.message;
        const people = await result.map((r : any) => r.care_recipient_id)
        res.status(200).send(people)
     })
});

dataController.get('/events', async (req , res) => {
    console.log(req.query.id)

    const callback: mysql.queryCallback = async (err, result) =>
    { 
       if (err) throw err.message;
       const events = await result.map((r : any) => r.payload)
       res.send(events)
    };

    if (req.query.id) {
      connection.query('SELECT payload FROM events WHERE care_recipient_id=? ORDER BY timestamp DESC', [req.query.id], callback);
    } else {
      res.sendStatus(400);
    }
});






