export class DatePlay {
    club: string;
    position: string;
    feature: string;
    height: string;
    foot: string;
    nick?: string;

    constructor(club: string, position: string, feature: string, height: string, foot: string, nick: string){
        this.club = club;
        this.position = position;
        this.feature = feature;
        this.height = height;
        this.foot = foot;
        this.nick = nick;
    }
}