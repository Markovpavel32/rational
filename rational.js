import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs';


export const make = (a, b) => cons(a, b) ;
export const numer = rat => car(rat);
export const denom = rat => cdr(rat);
export const toString = make => `${numer(make)} / ${denom(make)}`;

export const  isEqual = (rat1, rat2) => car(rat1) * cdr(rat2) === cdr(rat1) * car(rat2) ? true : false;
export const add = (rat1, rat2) => make((numer(rat1) * denom(rat2) + denom(rat1)*numer(rat2)), (denom(rat1) * denom(rat2)));
export const sub = (rat1, rat2) => make((numer(rat1) * denom(rat2) - denom(rat1) * numer(rat2)), (denom(rat1) * denom(rat2)));
export const mul = (rat1, rat2) => make((numer(rat1) * numer(rat2)), (denom(rat1) * denom(rat2)));
export const div = (rat1, rat2) => make((numer(rat1) * denom(rat2)), (denom(rat1) * numer(rat2)));
