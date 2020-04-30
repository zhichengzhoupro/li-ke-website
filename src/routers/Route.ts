export default interface Route {
    path: string,
    component: any,
    isExact: boolean,
    layout?: any
}

