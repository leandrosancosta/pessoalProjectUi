export class Remedy {
    public id: number;
    public name: string;
    public posology: string;
    public quantityDay: number;
    public daysOfWeek: string;
    public schedules: string;
    public isActived: boolean;

    constructor(){
        this.quantityDay = 0
    }

}