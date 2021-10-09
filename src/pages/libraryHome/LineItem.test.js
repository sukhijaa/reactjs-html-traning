// import {describe, it} from "mocha";
// import {expect} from "chai/index";

// describe : It is used to define the test suite - collection of tests
// it : Used to define a singular test

import LineItem from "./LineItem";

describe("<LineItem/> Unit Tests", () => {
    let LineItemMock;

    beforeEach(() => {
        try {
            LineItemMock = shallow(<LineItem title={"My Custom Title"}/>);
        } catch (e) {
            expect(1).to.equal(2);
        }
    });

    it("Renders Without Error only with Required Props", () => {
        const lineWrapperDiv = LineItemMock.find(".line-item");
        expect(lineWrapperDiv).to.have.lengthOf(1);
    });

    it("Title is exactly what is passed down from the props", () => {
        ["New Tile 1 spvnsdv", "New Title 2 ssdvnsdv eovni"].forEach(title => {
            LineItemMock.setProps({title});
            let titleDivArr = LineItemMock.find(".line-item-title");
            let titleDiv = titleDivArr.at(0);
            let containsExactTitle = titleDiv.html().includes(title);
            expect(containsExactTitle).to.equal(true);
        });
    });

    it("Caption is exactly what is passed down from the props", () => {
        ["New Tile 1 spvnsdv", "New Title 2 ssdvnsdv eovni"].forEach(caption => {
            LineItemMock.setProps({caption});
            let titleDivArr = LineItemMock.find(".line-item-caption");
            let titleDiv = titleDivArr.at(0);
            let containsExactTitle = titleDiv.html().includes(caption);
            expect(containsExactTitle).to.equal(true);
        });
    })
});