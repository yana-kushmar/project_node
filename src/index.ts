import express, {Response, Request} from "express"
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})