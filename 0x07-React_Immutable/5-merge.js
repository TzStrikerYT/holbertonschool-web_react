import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  const p1 = List(page1);
  const p2 = List(page2);

  return p1.concat(p2);
}

export function mergeElements(page1, page2) {
  const p1 = Map(page1);
  const p2 = Map(page2);

  return p1.merge(p2);
}
