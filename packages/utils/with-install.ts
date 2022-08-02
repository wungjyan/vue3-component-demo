import type { Plugin } from "vue";

export type SFCWithInstall<T> = T & Plugin;

export function withInstall<T>(comp: T) {
  (comp as SFCWithInstall<T>).install = function (app) {
    app.component((comp as unknown as { name: string }).name, comp);
  };
  return comp as SFCWithInstall<T>;
}
