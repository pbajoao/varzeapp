export class AlertProperties {
    title: string;
    subtitle: string;
    message: string;
    textBtn: string;

    constructor(title: string, subtitle: string, message: string, textBtn: string) {
        this.title = title;
        this.subtitle = subtitle;
        this.message = message;
        this.textBtn = textBtn;
    }
}
