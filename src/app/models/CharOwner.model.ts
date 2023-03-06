import ISpell from "./spell.model";

export default interface ICharOwner {
    name: string,
    owner: string,
    charID: string,
    path:string,
    order:string,
    legacy:string
}