
import  { Express } from 'express';
import receiptRouter from './receipt.route';
import productRouter from './product.route';

function route(app: Express): void {
    app.use("/receipt", receiptRouter);
    app.use("/detail", productRouter);
}

export default route;
