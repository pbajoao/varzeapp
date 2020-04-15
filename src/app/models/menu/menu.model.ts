export class Menu {
    type: string;
    icon: string;
    title?: string;

    constructor(type: string, icon: string, title?: string){
        this.type = type;
        this.icon = icon;
        this.title = title;
    }
}