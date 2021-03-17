import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const obj = fromJS(object);

  return obj.getIn(array, undefined);
}
