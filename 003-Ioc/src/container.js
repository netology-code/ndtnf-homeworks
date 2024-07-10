import { Container } from "inversify";
//import { TYPES } from "./types";
//import { Warrior, Weapon, ThrowableWeapon } from "./interfaces";
//import { Ninja, Katana, Shuriken } from "./entities";
import {BooksRepository} from "./entities"
const myContainer = new Container();

container.bind(BooksRepository).toSelf()

export { myContainer };