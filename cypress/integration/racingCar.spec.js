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

  const typeCarTryAndClickToSubmitBtn = (carTry = 5) => {
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
  it("올바른 시도 횟수 입력 시, 화면에 자동차 경주 섹션이 표시되는지 테스트 한다.", () => {
    typeCarNameAndClickToSubmitBtn();
    typeCarTryAndClickToSubmitBtn();
    cy.get(".car-player")
      .should("have.length", carNames.length)
      .each(($el, idx) => cy.get($el).should("have.text", carNames[idx]));
  });

  it("자동차 경주가 끝났을 때 우승자가 정상적으로 출력되는지 테스트", () => {
    typeCarNameAndClickToSubmitBtn();
    typeCarTryAndClickToSubmitBtn();

    cy.clock();
    cy.wait(4000);

    cy.get(".car-player-action").then(($cars) => {
      const carCnts = [...$cars].map(($car) => {
        return $car.querySelectorAll(".forward-icon").length;
      });
      const maxScore = Math.max(...carCnts);
      let winners = [];

      carCnts.forEach((carCnt, idx) => {
        if (carCnt === maxScore) {
          winners.push(carNames[idx]);
        }
      });

      cy.get("#game-result").should(
        "have.text",
        `🏆 최종 우승자: ${winners.join(", ")} 🏆`
      );
    });
  });

  it("다시 시작 눌렀을 때 화면 초기화 테스트", () => {
    typeCarNameAndClickToSubmitBtn();
    typeCarTryAndClickToSubmitBtn();

    cy.get("#restart-btn").click();
    cy.get("#car-name-input").should("have.text", "");
    cy.get("#car-try-input").should("have.text", "");
  });
});
