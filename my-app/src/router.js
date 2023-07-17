import {createHashRouter} from "react-router-dom";
import ExpLise from "./ExpList";
import ContextBasicCase from "./useContext/basic";
import ContextHighCase from "./useContext/high";
import EffectBasicCase from "./useEffect/basic";
import EffectHighCase from "./useEffect/highone";
import EffectHighTwo from "./useEffect/hightwo";
import ReducerBasicCase from "./useReducer/reducer_basic";
import StateBasicCase from "./useState/Basic";
import StateHighOne from "./useState/highone";
import StateHighThree from "./useState/highthree";
import StateHighTwo from "./useState/hightwo";
import ReducerBasicCaseTwo from "./useReducer/reducer_basic2";
import ReducerContext from "./useReducer/reducer_context";
import CallBackCase from "./useCallBack/CallBackCase";
import MemoCase from "./useMemo/momo_case";

export const router = createHashRouter([
  {
    path: '/',
    element: <ExpLise/>,
  },
  {
    path:'case1',
    element: <StateBasicCase />,
  },
  {
    path:'case2',
    element: <StateHighOne/>,
  },
  {
    path:'case3',
    element: <StateHighTwo/>,
  },
  {
    path:'case4',
    element: <StateHighThree/>,
  },
  {
    path:'case5',
    element: <EffectBasicCase/>,
  },
  {
    path:'case6',
    element: <EffectHighCase/>,
  },
  {
    path:'case7',
    element: <EffectHighTwo/>,
  },
  {
    path:'case8',
    element: <ContextBasicCase />,
  },
  {
    path:'case9',
    element: <ContextHighCase />,
  },
  {
    path:'case10',
    element: <ReducerBasicCase/>,
  },
  {
    path:'case11',
    element: <ReducerBasicCaseTwo/>
  },
  {
    path:'case12',
    element: <ReducerContext/>
  },
  {
    path:'case13',
    element: <CallBackCase/>
  },
  {
    path:'case14',
    element: <MemoCase/>
  },
])