//SmartPhone
class SmartPhone{
    constructor(ram, batteryPower, price){
        this.ram=ram;
        this.batteryPower=batteryPower;
        this.price=price;
    }
    displayFeatures(){
        return this.ram +'\n'+this.batteryPower+'\n'+this.price;
    }
    remainingAmount(priceIHave){
        this.price = this.price - priceIHave;
    }
}
