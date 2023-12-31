/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getListing = /* GraphQL */ `
  query GetListing($id: ID!) {
    getListing(id: $id) {
      id
      title
      categoryName
      categoryID
      description
      images
      locationID
      locationName
      owner
      rent
      userID
      commonID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listListings = /* GraphQL */ `
  query ListListings(
    $filter: ModelListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        categoryName
        categoryID
        description
        images
        locationID
        locationName
        owner
        rent
        userID
        commonID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getListingByCreatedAt = /* GraphQL */ `
  query GetListingByCreatedAt(
    $commonID: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getListingByCreatedAt(
      commonID: $commonID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        categoryName
        categoryID
        description
        images
        locationID
        locationName
        owner
        rent
        userID
        commonID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
