import { Worksheet } from "../worksheet";
import { RESERVATIONS } from "./mock-reservations";
import { PARTS } from "./mock-parts";

/*
this.partner = partner;
this.worker = worker;
this.parts = parts;
*/

export const WORKSHEETS : Worksheet[] = [
    new Worksheet(RESERVATIONS[0].partner, RESERVATIONS[0].worker, [PARTS[0], PARTS[1]]),
    new Worksheet(RESERVATIONS[2].partner, RESERVATIONS[2].worker, [PARTS[1], PARTS[2], PARTS[3], PARTS[1]])
];