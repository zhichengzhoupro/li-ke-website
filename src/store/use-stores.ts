import React from 'react'
import {GlobalContext} from "./Global.context";

export const useStores = (): any => React.useContext(GlobalContext)