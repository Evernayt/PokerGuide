import { ImageSourcePropType } from "react-native";

export interface IStep {
  num: number;
  image: ImageSourcePropType;
  text: string;
  lists: string[];
  tip?: string;
}