import { expect } from "chai"
import { CodinGame } from "./index.js";

describe("Test HOW TO TIME FLIES ",() => {
     it("Full years",() => {
        expect(CodinGame("01.01.2000","01.01.2016")).to.be.eql("16 years, total 5844 days")
     })
     it("full months",() => {
         expect(CodinGame("01.01.2016","18.08.2016")).to.be.eql("7 months, total 230 days")
     })
     it("Years and months",() => {
         expect(CodinGame("01.01.2015","01.03.2018")).to.be.eql("3 years, 2 months, total 1155 days")
     })
     it("Days only",() => {
         expect(CodinGame("01.01.2000","29.01.2000")).to.be.eql("total 28 days")
     })
     it("Same date",() => {
         expect(CodinGame("01.01.2020","01.01.2020")).to.be.eql("total 0 days")
     })
})
