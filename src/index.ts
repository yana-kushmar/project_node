import express from "express"
import bodyParser from "body-parser";
import {productsRoute} from "./poutes/products-route";
import {addressesRoute} from "./poutes/addresses-route";

const app = express()
const port = process.env.PORT || 3000



app.use(bodyParser({ }))


app.use("/products", productsRoute)
app.use("/addresses", addressesRoute)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})