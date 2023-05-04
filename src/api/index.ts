import { traffic, defs as trafficDefs } from './traffic';

(window as any).defs = {
  traffic: trafficDefs,
};
export const Api = {
  traffic,
};
// (window as any).API = Api;
