// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('check phone number 123-456-7890', () => {
    expect(functions.isPhoneNumber('123-456-7890')).toBe(true);
});
test('check phone number (098)765-4321', () => {
    expect(functions.isPhoneNumber('(098)765-4321')).toBe(true);
});
test('check phone number 1234567890', () => {
    expect(functions.isPhoneNumber('1234567890')).toBe(false);
});
test('check phone number (098)(765)4321', () => {
    expect(functions.isPhoneNumber('(098)(765)4321')).toBe(false);
});


test('check email pdn002@ucsd.edu', () => {
    expect(functions.isEmail('pdn002@ucsd.edu')).toBe(true);
});
test('check email someone@gmail.com', () => {
    expect(functions.isEmail('someone@gmail.com')).toBe(true);
});
test('check email someone#gmail.com', () => {
    expect(functions.isEmail('someone#gmail.com')).toBe(false);
});
test('check email someone.gmail@edu', () => {
    expect(functions.isEmail('someone.gmail@edu')).toBe(false);
});


test('check strong password abcd1_', () => {
    expect(functions.isStrongPassword('abcd1_')).toBe(true);
});
test('check strong password abcd467_3', () => {
    expect(functions.isStrongPassword('axyd5_')).toBe(true);
});
test('check strong password abcdefghijklmnopqrstuvwxyz', () => {
    expect(functions.isStrongPassword('abcdefghijklmnopqrstuvwxyz')).toBe(false);
});
test('check strong password !?#', () => {
    expect(functions.isStrongPassword('!?#')).toBe(false);
});


test('check date 07/04/2002', () => {
    expect(functions.isDate('07/04/2002')).toBe(true);
});
test('check date 11/17/2022', () => {
    expect(functions.isDate('11/17/2022')).toBe(true);
});
test('check date 11-17-2022', () => {
    expect(functions.isDate('11-17-2022')).toBe(false);
});
test('check date 11/17/22', () => {
    expect(functions.isDate('11/17/22')).toBe(false);
});


test('check hex color #0E2', () => {
    expect(functions.isHexColor('#0E2')).toBe(true);
});
test('check hex color #001BFF', () => {
    expect(functions.isHexColor('#001BFF')).toBe(true);
});
test('check hex color #1', () => {
    expect(functions.isHexColor('#1')).toBe(false);
});
test('check hex color #ZZZZZZ', () => {
    expect(functions.isHexColor('#ZZZZZZ')).toBe(false);
});
