import { User } from "../user";
import { Role } from "../role";

export const USERS : User[] = [
    new User("Dolgozó1", "Dolgozófalva1", "012011", 0, "dolgozo1", "dolgozo1", Role.WORKER),
    new User("Dolgozó2", "Dolgozófalva2", "012012", 1, "dolgozo2", "dolgozo2", Role.WORKER),
    new User("Dolgozó2", "Dolgozófalva3", "012013", 2, "dolgozo3", "dolgozo3", Role.WORKER),
    new User("Partner1", "Partnerfalva1", "0120111", 3, "partner1", "partner1", Role.PARTNER),
    new User("Partner2", "Partnerfalva2", "0120122", 4, "partner2", "partner2", Role.PARTNER),
    new User("Partner3", "Partnerfalva3", "0120133", 5, "partner3", "partner3", Role.PARTNER)
];