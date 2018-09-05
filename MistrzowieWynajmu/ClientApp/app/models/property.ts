export class Property {
    constructor(
        public propertId: number,
        public type: string,
        public description: string,
        public rooms: number,
        public area: number,
        public washer: boolean,
        public refrigerator: boolean,
        public iron: boolean
    ) {}
}