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
import RefBasic from "./useRef/refbasic";
import RefCaseOne from "./useRef/refcase1";
import RefCaseTwo from "./useRef/refcase2";
import RefCaseThree from "./useRef/refcase3";
import ForWardRefUse from "./useRef/forwardRef";
import ImpHandlerUse from "./useImperativeHandle/imperative_case";
import { LayoutEffectCase } from "./useLayoutEffect/layoutcase";
import DebugValueCase from "./useDebugValue/debugvalue";
import NoReturnCase from "./customHook/noreturn/noreturn";
import ReturnCase from "./customHook/return/return";
import ReturnSplCase from "./customHook/return_special/returnspl";
import DeferValueCase from "./useDeferredValue/deferredvalue";
import TransitonCase from "./useTransition/transition";

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
  {
    path:'case15',
    element: <RefBasic/>
  },
  {
    path:'case16',
    element: <RefCaseOne/>
  },
  {
    path:'case17',
    element: <RefCaseTwo/>
  },
  {
    path:'case18',
    element: <RefCaseThree/>
  },
  {
    path:'case19',
    element: <ForWardRefUse/>
  },
  {
    path:'case20',
    element: <ImpHandlerUse/>
  },
  {
    path:'case21',
    element: <LayoutEffectCase/>
  },
  {
    path:'case22',
    element: <DebugValueCase/>
  },
  {
    path:'case23',
    element: <DeferValueCase/>
  },
  {
    path:'case24',
    element: <TransitonCase/>
  },
  {
    path:'case25',
    element: <NoReturnCase/>
  },
  {
    path:'case26',
    element: <ReturnCase/>
  },
  {
    path:'case27',
    element: <ReturnSplCase/>
  },
])