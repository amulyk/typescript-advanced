{
  const fetchCasesFromAPI = async function() {
    const legalCases: LegalCase[] = await $http.get('legal-cases/');

    for (const legalCase of legalCases) {
      // Null Object Pattern
      legalCase.documents = legalCase.documents || [];
    }
  }
}
