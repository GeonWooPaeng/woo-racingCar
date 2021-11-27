describe("Home", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5500/woo-racingcar/");
  });

  const carNames = ["EAST", "WEST", "SOUTH", "NORTH"];

  const typeCarNameAndClickToSubmitBtn = (
    carNames = ["EAST", "WEST", "SOUTH", "NORTH"]
  ) => {
    cy.get("#car-name-input").type(carNames.join(","));
    return cy.get("#car-name-submit").click();
  };

  const typeCarTryAndClickToSubmitBtn = (carTry = 3) => {
    cy.get("#car-try-input").type(carTry);
    return cy.get("#car-try-submit").click();
  };

  it("올바르지 않은 자동차 이름 입력시, 경고메세지 출력 테스트", () => {
    const longCarName = ["asdfqwe"];
    const blankCarName = [" "];
    const alertStub = cy.stub();

    cy.on("window:alert", alertStub);
    typeCarNameAndClickToSubmitBtn(longCarName).then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith(
        "자동차 이름 입력이 잘못되었습니다."
      );
    });
    typeCarNameAndClickToSubmitBtn(blankCarName).then(() => {
      expect(alertStub.getCall(1)).to.be.calledWith(
        "자동차 이름 입력이 잘못되었습니다."
      );
    });
    cy.get("#car-name-input").should("have.text", "");
  });

  it("올바르지 않은 자동차 횟수 입력시, 경고메세지 출력 테스트", () => {
    const wrongTry = -10;
    const alertStub = cy.stub();

    cy.on("window:alert", alertStub);
    typeCarNameAndClickToSubmitBtn();
    typeCarTryAndClickToSubmitBtn(wrongTry).then(() => {
      expect(alertStub.getCall(0)).to.be.calledWith(
        "자동차 시도 횟수가 잘못되었습니다."
      );
    });
  });
});
