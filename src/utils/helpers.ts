import { Colors, Fonts } from "./styles";
import { ReqStatusEnum } from "../types";

export const baseHeaderOptions = {
  headerStyle: {
    elevation: 0,
    shadowOpacity: 0,
    backgroundColor: Colors.black,
  },
  headerTitleStyle: {
    color: Colors.white,
    fontSize: 24,
    fontFamily: Fonts.in_semi_bold,
  },
  headerTintColor: Colors['medium-grey'],
};

export type ActionType = 'loading' | 'loadMore' | 'refresh';

export const getReqStatusByActionType = (actionType?: ActionType) => {
  switch (actionType) {
    case 'loadMore':
      return ReqStatusEnum.LOAD_MORE;
    case 'refresh':
      return ReqStatusEnum.REFRESH;
    default:
      return ReqStatusEnum.LOADING;
  }
};

export const shortlyText = (text: string, length: number) => {
  return text?.length > length ? text?.slice(0, length) + '...' : text;
};
