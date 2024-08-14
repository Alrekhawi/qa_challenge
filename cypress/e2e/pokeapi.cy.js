
describe('PokeAPI Berry Tests', () => {

  // Test Case 1: Valid ID for Berry
  it('Call /berry/{id} with valid ID and get expected response', () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/berry/1').then((response) => {
  // Expecting the response status code to be 200 
      expect(response.status).to.eq(200);
      expect(response.body.name).to.eq('cheri')
    })
  })
}) 
  // Test Case 2: Invalid ID for Berry
  it('Call /berry/{id} with invalid ID and check error response', () => {
    cy.request({ url: 'https://pokeapi.co/api/v2/berry/9999',
      failOnStatusCode: false }).then((response) => {
      expect(response.status).to.eq(404)
    })
  })

  // Test Case 3: Valid Name for Berry
  it('Call /berry/{name} with valid name and get expected response', () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/berry/cheri').then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.id).to.eq(1)
    })
  })
    // Test Case 4: Invalid Name for Berry
    it('Call /berry/{name} with invalid name and check error response', () => {
      cy.request({url: 'https://pokeapi.co/api/v2/berry/invalidberry',
        failOnStatusCode: false}).then((response) => {
        expect(response.status).to.eq(404)
      })
    })
  
    // Test Case 5: Valid Name for Berry Flavor
    it('Call /berry-flavor/{name} with valid name and get expected response', () => {
      cy.request('GET', 'https://pokeapi.co/api/v2/berry-flavor/spicy').then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.id).to.eq(1)
      })
    })
