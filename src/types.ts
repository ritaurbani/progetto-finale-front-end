export type BankProduct = {
    id: number,
    title: string;
    category: string;
    bankName: string;
    description: string;
    rate: number;
    durationInYears: number;
    canRemove?:boolean
}

export type ItemToCompare = {
 id: number,
 title: string,
  rate: number
}