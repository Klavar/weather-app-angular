export class Weather {
    constructor(
        public temp: number,
        public summary: string,
        public wind: string,
        public humidity: number,
        public icon: string 
    ) { }
}