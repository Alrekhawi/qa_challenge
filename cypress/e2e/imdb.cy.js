describe('IMDb e2e test suite', () => {
  describe('Navigate to IMDb site', () => {
    beforeEach(() => {
      cy.visit('https://imdb.com')
    })
    it('and access the first Nicolas cage upcoming project in pre-production', () => {
      // search for Nicolas Cage
      cy.get('[id="suggestion-search"]').type('Nicolas Cage')

      // Access the profile 
      cy.get('[data-testid="search-result--const"]').contains('Nicolas Cage').click()

      // Unfold the upcoming tab
      cy.get('[data-testid="accordion-item-actor-upcoming-projects"]').click()

      // Click on the first movie with a completed tag. We are searching for Pre-production
      cy.get('[data-testid="accordion-item-content-container"]').contains('Pre-production').first().click()

    })

    it('and Rate a 5 stars to second top box office movie', () => {

      // unfold the Menu and navigate to the Top Box Office sectionß
      cy.get('[id="imdbHeader-navDrawerOpen"]').click()
      cy.get('[data-testid="category-expando"]').contains('Movies').click()
      cy.get('[role="menuitem"]').contains('Top Box Office').click()

      // click on the 2nd item on the Top box office list
      cy.get('ul[role="presentation"]>li').eq(1).within(() => {
        cy.get('a').first().click()
      })
    })

    it('and Go to Top 250 tv  shows and display Photos', () => {

      // unfold the Menu and navigate to the Top 250 TV shows section
      cy.get('[id="imdbHeader-navDrawerOpen"]').click()
      cy.get('[data-testid="category-expando"]').contains('Movies').click()
      cy.get('[role="menuitem"]').contains('Top 250 Movies').click()

      //click on Breaking Bad, go to the Photos 
      cy.get('[id="suggestion-search"]').type('Breaking Bad')
      cy.get('[data-testid="search-result--const"]').contains('Breaking Bad').click()
      cy.get('[data-testid="hero__photo-link"]').click()
      cy.get('[data-testid="mv-gallery-button"]').click()

      // display only Danny Trejo's photos 
      cy.get('[data-testid="image-chip-dropdown-test-id"]').click()
      cy.get('[data-testid="image-names-filter-container-test-id"]').contains('Bryan Cranston').click()
      cy.get('[data-testid="promptable__x"]').click()

      // click on the 2nd photo in the list.
      cy.get('[data-testid="image-gallery-image"]').eq(1).click()

    })


    it('and Search for celeberties born yesterday', () => {
      //unfold the Menu button and navigate to the Born today section;
      cy.get('[id="imdbHeader-navDrawerOpen"]').click()
      cy.get('[data-testid="category-expando"]').contains('Celebs').click()
      cy.get('[role="menuitem"]').contains('Born Today').click()

      //delete default search
      cy.get('[data-testid="chip-list-test-id"]').click()

      //unfold Birthday and search for Celebrities born yesterday
      cy.get('[id="birthdayAccordion"]').click()
      cy.get('[data-testid="birthday-input-test-id"]').type('08-13').type('{enter}')
      cy.get('[role="button"]').contains('See results').click()

      //Click on the 3rd name in the list and take a screenshot
      cy.get('ul[role="presentation"]>li').eq(2).click()
      cy.screenshot()

    })
  })
})