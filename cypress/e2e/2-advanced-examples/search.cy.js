describe ('Search elemeents', ()=>{
    beforeEach(()=>{
        cy.visit('/');
    })
    it('Search for elements with multiple results', ()=>{
        cy.visit('/');
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('dress');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.title).should('contain','dress');
        })
    })
    it('Search for elements with no result', ()=>{
        cy.fixture('index').then((index)=>{
            cy.get(index.searchBox).type('qwerty');
            cy.get(index.searchButton).click();
        })
        cy.fixture('searchResult').then((searchResult)=>{
            cy.get(searchResult.alert).should('contain','No results were found for your search');
        })
    })
})