export default interface ISpell {
    arcanum: string,
    dots: number,
    name: string,
    practice: string,
    primaryFactor: string,
    cost: string,
    withstand: string,
    suggestedRotes: string,
    description: string,
    reach: Array<{ cost: number, effect: string }>
}
