import {getFullYear, getFooterCopy, getLatestNotification} from './utils';

describe("Utils Tests", () => {
    describe("Test getFullYear", () => {
      it("This function should return the current year", () => {
          const year = getFullYear();
          expect(year).toEqual(new Date().getFullYear());
      });
    });

    describe("Test getFooterCopy", () => {
        it("Return the true", () => {
            let msg = getFooterCopy(true);
            expect(msg).toEqual("Holberton School");
        });

        it("Return the False", () => {
            let msg = getFooterCopy(false);
            expect(msg).toEqual("Holberton School main dashboard");
        });
    });

    describe("Test getLatestNotification", () => {
        it("Return the correct string", () => {
            const st = "<strong>Urgent requirement</strong> - complete by EOD";
            expect(getLatestNotification()).toEqual(st);
        });
    });
});
