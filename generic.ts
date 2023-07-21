// 우리가 하는 요청에 따라 call signature를 생성함.
// any와는 다름. any는 타입스크립트에서 벗어나므로 보호해주지 않음.

type SuperPrint = <T, M>(a: T[], b: M) => T;

const superPrint: SuperPrint = (a) => a[0];

const a = superPrint([1, 2, 3, 4, 5], '1');

const b = superPrint(['1', '2', '3'], 1);

const c = superPrint([true, 1, '3'], false);
