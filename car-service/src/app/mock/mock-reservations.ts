import { Reservation } from "../reservation";
import { USERS } from "./mock-users";
import { Category } from "../category";

export const RESERVATIONS : Reservation[] = [
    new Reservation(USERS[3], new Date(2017, 10, 29, 16, 0), USERS[0], Category.MALFUNCTION, "Rossz a kocsi. Nyílvánvalóan."),
    new Reservation(USERS[4], new Date(2017, 10, 29, 16, 0), USERS[0], Category.MANDATORY, "Kötelező"),
    new Reservation(USERS[5], new Date(2017, 10, 29, 14, 30), USERS[2], Category.MOT, "Rossz a kocsi. Nyílvánvalóan."),
    new Reservation(USERS[5], new Date(2017, 11, 1, 12, 45), USERS[2], Category.MALFUNCTION, "Rossz a kocsi. Nyílvánvalóan."),
    new Reservation(USERS[3], new Date(2017, 11, 10, 16, 0), USERS[0], Category.MALFUNCTION, "Rossz a kocsi. Nyílvánvalóan."),
    new Reservation(USERS[4], new Date(2017, 11, 20, 16, 0), USERS[0], Category.MANDATORY, "Kötelező"),
    new Reservation(USERS[5], new Date(2017, 11, 30, 14, 30), USERS[2], Category.MOT, "Rossz a kocsi. Nyílvánvalóan."),
    new Reservation(USERS[5], new Date(2018, 0, 1, 12, 45), USERS[2], Category.MALFUNCTION, "Rossz a kocsi. Nyílvánvalóan.")
];