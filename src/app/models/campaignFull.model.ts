import ICharOwner from "./CharOwner.model";

export default interface ICampaignFull {
    uid: string,
    name: string,
    desc: string,
    characters: Array<ICharOwner>
}