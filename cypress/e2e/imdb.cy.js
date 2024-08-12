describe('imdb e2e test', () => {
  describe('Navigate to IMDB',() => {
    beforeEach(() => {
      cy.visit('https://imdb.com')
    })              
    it('Search for Nicolas Cage and access his profile', () => {
      // search for Nicolas Cage
      cy.get('[id="suggestion-search"]').type('Nicolas Cage')

      // Access the profile 
      cy.get('[data-testid="search-result--const"]').contains('Nicolas Cage').click() 
      
      // Unfold the upcoming tab
      cy.get('[data-testid="accordion-item-actor-upcoming-projects"]').click()

      // Click on the first movie with a completed tag. We are searching for Pre-production
     cy.get('[data-testid="accordion-item-content-container"]').contains('Pre-production').first().click()
    })
  })

})