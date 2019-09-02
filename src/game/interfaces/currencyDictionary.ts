import { Currency } from '@/game/utils/enums'

export type  Dictionary < K extends string, T > = {
    [P in K]: T;
}