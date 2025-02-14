/// <reference types="Cypress" />
var path = require("path");

describe("Dataset attachments", () => {
  beforeEach(() => {
    cy.login(Cypress.config("username"), Cypress.config("password"));

    cy.intercept("POST", "/api/v3/Datasets/**/*").as("upload");
  });

  after(() => {
    cy.removeDatasets();
  });

  describe("Attachment tests", () => {
    it("should go to dataset details and add an attachment using the dropzone", () => {
      cy.createDataset("raw");
      cy.visit("/datasets");

      cy.get(".dataset-table mat-table mat-header-row").should("exist");

      cy.finishedLoading();

      cy.get('input[type="search"][data-placeholder="Text Search"]')
        .clear()
        .type("Cypress");

      cy.isLoading();

      cy.finishedLoading();

      cy.get(".mat-row").contains("Cypress Dataset").first().click();

      cy.isLoading();

      cy.finishedLoading();

      cy.get(".mat-tab-link").contains("Attachments").click();

      cy.fixture("attachment-image").then((file) => {
        cy.get(".dropzone").attachFile(
          {
            fileContent: file.content,
            fileName: file.name,
            mimeType: file.mimeType,
          },
          { subjectType: "drag-n-drop", force: true }
        );
      });

      cy.wait("@upload").then(({ request, response }) => {
        expect(request.method).to.eq("POST");
        expect(response.statusCode).to.eq(201);

        cy.get(".snackbar-success").should("exist");
      });

      cy.get(".attachment-card #caption").should(
        "have.value",
        "SciCatLogo.png"
      );
    });

    it("should be able to download dataset attachment", () => {
      cy.visit("/datasets");

      cy.get(".dataset-table mat-table mat-header-row").should("exist");

      cy.finishedLoading();

      cy.get('input[type="search"][data-placeholder="Text Search"]')
        .clear()
        .type("Cypress");

      cy.isLoading();

      cy.finishedLoading();

      cy.get(".mat-row").contains("Cypress Dataset").first().click();

      cy.isLoading();

      cy.finishedLoading();

      cy.get(".mat-tab-link").contains("Attachments").click();

      cy.get(".download-button").click();

      const downloadsFolder = Cypress.config("downloadsFolder");
      cy.readFile(path.join(downloadsFolder, "SciCatLogo.png")).should("exist");
    });

    it("should be able to delete dataset attachment", () => {
      cy.visit("/datasets");

      cy.get(".dataset-table mat-table mat-header-row").should("exist");

      cy.finishedLoading();

      cy.get('input[type="search"][data-placeholder="Text Search"]')
        .clear()
        .type("Cypress");

      cy.isLoading();

      cy.finishedLoading();

      cy.get(".mat-row").contains("Cypress Dataset").first().click();

      cy.isLoading();

      cy.finishedLoading();

      cy.get(".mat-tab-link").contains("Attachments").click();

      cy.get(".delete-button").click();

      cy.get(".attachment-card #caption").should("not.exist");

      cy.get(".snackbar-success").should("exist");
    });
  });
});
