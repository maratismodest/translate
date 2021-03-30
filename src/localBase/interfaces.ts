import {InitialStateInterface} from "./base";
import {Dispatch, SetStateAction} from "react";

export interface StateInterface {
    state: InitialStateInterface
    setState: Dispatch<SetStateAction<any>>
}