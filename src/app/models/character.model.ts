import IAttainment from "./attainment.model"
import ICastConfig from "./castConfig.model"
import ICondition from "./condition.model"
import IFamiliar from "./familiar.model"
import IMerit from "./merit.model"
import IPraxis from "./praxis.model"
import IRote from "./rote.model"
import ISpell from "./spell.model"
import ITilt from "./tilt.model"

export interface ICharacter {
    createdWhen:Date,
    uid: string,
    campaign:string,
    notes:string,
    details: {
        characterName: string,
        shadowName: string,
        virtue: string,
        vice: string,
        path: string,
        order: string,
        legacy: string
    },
    attributes: {
        intelligence: number,
        wits: number,
        resolve: number,
        strength: number,
        dexterity: number,
        stamina: number,
        presence: number,
        manipulation: number,
        composure: number
    },
    skills: {
        // Mental
        academics: number,
        computer: number,
        crafts: number,
        investigation: number,
        medicine: number,
        occult: number,
        politics: number,
        science: number,
        // Physical
        athletics: number,
        brawl: number,
        drive: number,
        firearms: number,
        larceny: number,
        stealth: number,
        survival: number,
        weaponry: number,
        // Social
        animalKen: number,
        empathy: number,
        expression: number,
        intimidation: number,
        persuasion: number,
        socialize: number,
        streetwise: number,
        subterfuge: number
    },
    specialities: {
        // Mental
        academics: string,
        computer: string,
        crafts: string,
        investigation: string,
        medicine: string,
        occult: string,
        politics: string,
        science: string,
        // Physical
        athletics: string,
        brawl: string,
        drive: string,
        firearms: string,
        larceny: string,
        stealth: string,
        survival: string,
        weaponry: string,
        // Social
        animalKen: string,
        empathy: string,
        expression: string,
        intimidation: string,
        persuasion: string,
        socialize: string,
        streetwise: string,
        subterfuge: string
    },
    arcana: {
        rulingArcanum:Array<string>,
        inferiorArcanum:Array<string>,
        death: number,
        fate: number,
        forces: number,
        life: number,
        matter: number,
        mind: number,
        prime: number,
        spirit: number,
        space: number,
        time: number
    },
    merits: Array<IMerit>,
    stats: {
        health: number,
        bashingDamage: number,
        lethalDamage: number,
        aggravatedDamage: number,
        willpower: number,
        usedWillpower: number,
        gnosis: number,
        maxMana: number,
        remainingMana: number,
        wisdom: number,
        size: number,
        speed: number,
        defense: number,
        armor: number,
        initiativeMod: number,
        experience: number,
        arcaneExperiences: number,
        aspirations: string,
        obsessions: string
    },
    spells: Array<ISpell>,
    rotes: Array<IRote>,
    praxis: Array<ISpell>,
    attainments: Array<IAttainment>,
    tilts: Array<ITilt>,
    conditions: Array<ICondition>,
    familiar: IFamiliar,
    favoriteSpells: Array<ICastConfig>
}


export interface IDetails {
    characterName: string,
    shadowName: string,
    virtue: string,
    vice: string,
    path: string,
    order: string,
    legacy: string
}