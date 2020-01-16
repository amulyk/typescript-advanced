{
  const fetchCasesFromAPI = async function() {
    const legalCasesFromAPI: LegalCase[] = await $http.get('legal-cases/');
    // Null Object Pattern
    const legalCases = legalCasesFromAPI || null;

    for (const legalCase of legalCases) {
      // Null Object Pattern
      legalCase.documents = legalCase.documents || [];
    }
  }
}
