describe('app', ()=> {
  beforeEach(() => {
    cy.visit('/')
});

describe('Request', () => {
it ('makes an API request', () => {
    cy.request('https://swapi.dev/api/planets/')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
    });
  });

describe('Buttons', () => {
    it ('shows the next and previous pages', () => {
      cy.contains('Next').click()
      cy.contains('Previous').click()
  });
  });

describe ('Searchbar', () => {
  it ('contains Search Planet', () => {
    const input = "Dagobah"
    .type(input)
    cy.get('.searchbar').should('have.value', input)
});
});

});
});