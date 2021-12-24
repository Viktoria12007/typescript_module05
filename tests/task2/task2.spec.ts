import {ApiProvider, ApiProviderAfterRefactoring} from "../../src/task2/task2";

const apiProviderOld = new ApiProvider();
const apiProviderNew = new ApiProviderAfterRefactoring();

describe('task', () => {
    describe('apiProvider', () => {
        it('getUsers', () => {
            expect(apiProviderOld.getUsers()).toStrictEqual(apiProviderNew.getUsers());
        });

        it('auth', () => {
            expect(apiProviderOld.auth()).toStrictEqual(apiProviderNew.auth());
        });

        it('getSomeOther', () => {
            expect(apiProviderOld.getSomeOther()).toStrictEqual(apiProviderNew.getSomeOther());
        });
    });
});
