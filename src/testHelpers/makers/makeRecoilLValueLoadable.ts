import { Loadable } from "recoil";

export function makeRecoilLValueLoadable<T>(overrides: Partial<Loadable<T>> = {}): Loadable<T> {
  return {
    state: "",
    ...overrides,
  } as any as Loadable<T>;
}
