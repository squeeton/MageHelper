export default interface IMeritRef {
    name: string,
    type: string,
    variableCost: boolean,
    minCost: null | number,
    maxCost: number,
    prerequisite: string,
    effect: string
}