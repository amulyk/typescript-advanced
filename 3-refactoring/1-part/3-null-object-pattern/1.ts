{
  const legalCases: LegalCase[] = await fetchCasesFromAPI();
  for (const legalCase of legalCases) {
    if (legalCase.documents !== null) {
      uploadDocuments(legalCase.documents);
    }
  }
}
