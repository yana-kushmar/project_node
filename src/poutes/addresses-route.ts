import {Request, Response, Router} from "express";
export const addressesRoute = Router({})

const addresses = [{id: 1, value: "Wola 13"}, {id: 2, value: "Adama Naruzchevich 27"}]


addressesRoute.get("/", (req: Request, res: Response) => {
    res.send(addresses)
})

addressesRoute.get("/:id", (req: Request, res: Response) => {
    const address = addresses.find(p => p.id === +req.params.id)
    if (address) {
        res.send(address)
    } else {
        res.send(404)
    }
})
