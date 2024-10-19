export class Report {
    subject: string;
    startDate: Date;
    endDate: Date;

    constructor() {
        this.subject = "";
        this.startDate = new Date();
        this.endDate = new Date();
    }
}