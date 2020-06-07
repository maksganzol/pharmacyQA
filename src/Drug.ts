import { Price } from "./types/types";

export class Drug {
    private _label: string;
    private _price: Price;
    private _producerId: number;
    private _categoryId: number;
    private _expirationDate: Date;
    constructor(label: string, price: Price, producerId: number, categoryId: number, expirationDate: Date) {
        this._categoryId = categoryId;
        this._label = label;
        if(price.amount >= 100) throw new Error('Invalid price');
        this._price =  price;
        this._producerId = producerId;
        if(expirationDate.getTime() <= Date.now()) throw new Error('Invalid expiration date')
        this._expirationDate = expirationDate;
    }

    public isExpired (): boolean {
        return Date.now() >= this._expirationDate.getTime();
    }
    
    public getPrice(): Price {
        return this._price;
    }

    public getLabel(): string {
        return this._label;
    }

    public getCategory(): number {
        return this._categoryId;
    }

    public getProducer(): number {
        return this._producerId;
    }

    public static regularPriceFormat = (wholePart: number, amount: number): Price => ({
        wholePart,
        amount,
        toString: () => `${wholePart}.${amount}`,
    })

}