import {IStep} from './IStep';

export interface IPart {
  num: number;
  title: string;
  steps: IStep[];
}
