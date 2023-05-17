/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchObjects = /* GraphQL */ `
  query SearchObjects(
    $allFields: String
    $sort: SearchableObjectSortInput
    $filter: SearchableObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    searchObjects(
      allFields: $allFields
      sort: $sort
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        bibliographic_citation
        create_date
        creator
        custom_key
        description
        display_date
        end_date
        heirarchy_path
        id
        identifier
        is_part_of
        language
        modified_date
        parent_collection
        provenance
        relation
        rights_holder
        rights
        source
        spatial
        start_date
        subject
        thumbnail_path
        title
        visibility
        ... on Collection {
          collection_category
          collectionmap_id
          collectionOptions
          explicit_content
          ownerinfo
          collectionmap {
            collectionmap_category
            collection_id
            create_date
            id
            map_object
            modified_date
            createdAt
            updatedAt
            collectionmapCollectionId
          }
          archives {
            nextToken
          }
          createdAt
          updatedAt
          collectionCollectionmapId
        }
        ... on Archive {
          alternative
          archiveOptions
          basis_of_record
          conforms_to
          contributor
          coverage
          created
          date
          explicit
          extent
          format
          has_format
          has_part
          has_version
          is_format_of
          is_version_of
          item_category
          license
          manifest_file_characterization
          manifest_url
          medium
          other_identifier
          publisher
          references
          repository
          tags
          temporal
          type
          collection {
            bibliographic_citation
            collection_category
            collectionmap_id
            collectionOptions
            create_date
            creator
            custom_key
            description
            display_date
            end_date
            explicit_content
            heirarchy_path
            id
            identifier
            is_part_of
            language
            modified_date
            ownerinfo
            parent_collection
            provenance
            relation
            rights_holder
            rights
            source
            spatial
            start_date
            subject
            thumbnail_path
            title
            visibility
            createdAt
            updatedAt
            collectionCollectionmapId
          }
          createdAt
          updatedAt
          collectionArchivesId
          archiveCollectionId
        }
      }
      nextToken
      total
    }
  }
`;
export const fulltextCollections = /* GraphQL */ `
  query FulltextCollections(
    $allFields: String
    $filter: SearchableCollectionFilterInput
    $sort: SearchableCollectionSortInput
    $limit: Int
    $nextToken: String
  ) {
    fulltextCollections(
      allFields: $allFields
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        bibliographic_citation
        collection_category
        collectionmap_id
        collectionOptions
        create_date
        creator
        custom_key
        description
        display_date
        end_date
        explicit_content
        heirarchy_path
        id
        identifier
        is_part_of
        language
        modified_date
        ownerinfo
        parent_collection
        provenance
        relation
        rights_holder
        rights
        source
        spatial
        start_date
        subject
        thumbnail_path
        title
        visibility
        collectionmap {
          collectionmap_category
          collection_id
          create_date
          id
          map_object
          modified_date
          createdAt
          updatedAt
          collectionmapCollectionId
        }
        archives {
          nextToken
        }
        createdAt
        updatedAt
        collectionCollectionmapId
      }
      nextToken
      total
    }
  }
`;
export const fulltextArchives = /* GraphQL */ `
  query FulltextArchives(
    $allFields: String
    $filter: SearchableArchiveFilterInput
    $sort: SearchableArchiveSortInput
    $limit: Int
    $nextToken: String
  ) {
    fulltextArchives(
      allFields: $allFields
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        alternative
        archiveOptions
        basis_of_record
        bibliographic_citation
        conforms_to
        contributor
        coverage
        create_date
        created
        creator
        custom_key
        date
        description
        display_date
        end_date
        explicit
        extent
        format
        has_format
        has_part
        has_version
        heirarchy_path
        id
        identifier
        is_format_of
        is_part_of
        is_version_of
        item_category
        language
        license
        manifest_file_characterization
        manifest_url
        medium
        modified_date
        other_identifier
        parent_collection
        provenance
        publisher
        references
        relation
        repository
        rights_holder
        rights
        source
        spatial
        start_date
        subject
        tags
        temporal
        thumbnail_path
        title
        type
        visibility
        collection {
          bibliographic_citation
          collection_category
          collectionmap_id
          collectionOptions
          create_date
          creator
          custom_key
          description
          display_date
          end_date
          explicit_content
          heirarchy_path
          id
          identifier
          is_part_of
          language
          modified_date
          ownerinfo
          parent_collection
          provenance
          relation
          rights_holder
          rights
          source
          spatial
          start_date
          subject
          thumbnail_path
          title
          visibility
          createdAt
          updatedAt
          collectionCollectionmapId
        }
        createdAt
        updatedAt
        collectionArchivesId
        archiveCollectionId
      }
      nextToken
      total
    }
  }
`;
export const getCollection = /* GraphQL */ `
  query GetCollection($id: ID!) {
    getCollection(id: $id) {
      bibliographic_citation
      collection_category
      collectionmap_id
      collectionOptions
      create_date
      creator
      custom_key
      description
      display_date
      end_date
      explicit_content
      heirarchy_path
      id
      identifier
      is_part_of
      language
      modified_date
      ownerinfo
      parent_collection
      provenance
      relation
      rights_holder
      rights
      source
      spatial
      start_date
      subject
      thumbnail_path
      title
      visibility
      collectionmap {
        collectionmap_category
        collection_id
        create_date
        id
        map_object
        modified_date
        collection {
          bibliographic_citation
          collection_category
          collectionmap_id
          collectionOptions
          create_date
          creator
          custom_key
          description
          display_date
          end_date
          explicit_content
          heirarchy_path
          id
          identifier
          is_part_of
          language
          modified_date
          ownerinfo
          parent_collection
          provenance
          relation
          rights_holder
          rights
          source
          spatial
          start_date
          subject
          thumbnail_path
          title
          visibility
          createdAt
          updatedAt
          collectionCollectionmapId
        }
        createdAt
        updatedAt
        collectionmapCollectionId
      }
      archives {
        items {
          alternative
          archiveOptions
          basis_of_record
          bibliographic_citation
          conforms_to
          contributor
          coverage
          create_date
          created
          creator
          custom_key
          date
          description
          display_date
          end_date
          explicit
          extent
          format
          has_format
          has_part
          has_version
          heirarchy_path
          id
          identifier
          is_format_of
          is_part_of
          is_version_of
          item_category
          language
          license
          manifest_file_characterization
          manifest_url
          medium
          modified_date
          other_identifier
          parent_collection
          provenance
          publisher
          references
          relation
          repository
          rights_holder
          rights
          source
          spatial
          start_date
          subject
          tags
          temporal
          thumbnail_path
          title
          type
          visibility
          createdAt
          updatedAt
          collectionArchivesId
          archiveCollectionId
        }
        nextToken
      }
      createdAt
      updatedAt
      collectionCollectionmapId
    }
  }
`;
export const listCollections = /* GraphQL */ `
  query ListCollections(
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        bibliographic_citation
        collection_category
        collectionmap_id
        collectionOptions
        create_date
        creator
        custom_key
        description
        display_date
        end_date
        explicit_content
        heirarchy_path
        id
        identifier
        is_part_of
        language
        modified_date
        ownerinfo
        parent_collection
        provenance
        relation
        rights_holder
        rights
        source
        spatial
        start_date
        subject
        thumbnail_path
        title
        visibility
        collectionmap {
          collectionmap_category
          collection_id
          create_date
          id
          map_object
          modified_date
          createdAt
          updatedAt
          collectionmapCollectionId
        }
        archives {
          nextToken
        }
        createdAt
        updatedAt
        collectionCollectionmapId
      }
      nextToken
    }
  }
`;
export const collectionByIdentifier = /* GraphQL */ `
  query CollectionByIdentifier(
    $identifier: String!
    $sortDirection: ModelSortDirection
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    collectionByIdentifier(
      identifier: $identifier
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        bibliographic_citation
        collection_category
        collectionmap_id
        collectionOptions
        create_date
        creator
        custom_key
        description
        display_date
        end_date
        explicit_content
        heirarchy_path
        id
        identifier
        is_part_of
        language
        modified_date
        ownerinfo
        parent_collection
        provenance
        relation
        rights_holder
        rights
        source
        spatial
        start_date
        subject
        thumbnail_path
        title
        visibility
        collectionmap {
          collectionmap_category
          collection_id
          create_date
          id
          map_object
          modified_date
          createdAt
          updatedAt
          collectionmapCollectionId
        }
        archives {
          nextToken
        }
        createdAt
        updatedAt
        collectionCollectionmapId
      }
      nextToken
    }
  }
`;
export const searchCollections = /* GraphQL */ `
  query SearchCollections(
    $filter: SearchableCollectionFilterInput
    $sort: [SearchableCollectionSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCollectionAggregationInput]
  ) {
    searchCollections(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        bibliographic_citation
        collection_category
        collectionmap_id
        collectionOptions
        create_date
        creator
        custom_key
        description
        display_date
        end_date
        explicit_content
        heirarchy_path
        id
        identifier
        is_part_of
        language
        modified_date
        ownerinfo
        parent_collection
        provenance
        relation
        rights_holder
        rights
        source
        spatial
        start_date
        subject
        thumbnail_path
        title
        visibility
        collectionmap {
          collectionmap_category
          collection_id
          create_date
          id
          map_object
          modified_date
          createdAt
          updatedAt
          collectionmapCollectionId
        }
        archives {
          nextToken
        }
        createdAt
        updatedAt
        collectionCollectionmapId
      }
      nextToken
      total
    }
  }
`;
export const getCollectionmap = /* GraphQL */ `
  query GetCollectionmap($id: ID!) {
    getCollectionmap(id: $id) {
      collectionmap_category
      collection_id
      create_date
      id
      map_object
      modified_date
      collection {
        bibliographic_citation
        collection_category
        collectionmap_id
        collectionOptions
        create_date
        creator
        custom_key
        description
        display_date
        end_date
        explicit_content
        heirarchy_path
        id
        identifier
        is_part_of
        language
        modified_date
        ownerinfo
        parent_collection
        provenance
        relation
        rights_holder
        rights
        source
        spatial
        start_date
        subject
        thumbnail_path
        title
        visibility
        collectionmap {
          collectionmap_category
          collection_id
          create_date
          id
          map_object
          modified_date
          createdAt
          updatedAt
          collectionmapCollectionId
        }
        archives {
          nextToken
        }
        createdAt
        updatedAt
        collectionCollectionmapId
      }
      createdAt
      updatedAt
      collectionmapCollectionId
    }
  }
`;
export const listCollectionmaps = /* GraphQL */ `
  query ListCollectionmaps(
    $filter: ModelCollectionmapFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollectionmaps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        collectionmap_category
        collection_id
        create_date
        id
        map_object
        modified_date
        collection {
          bibliographic_citation
          collection_category
          collectionmap_id
          collectionOptions
          create_date
          creator
          custom_key
          description
          display_date
          end_date
          explicit_content
          heirarchy_path
          id
          identifier
          is_part_of
          language
          modified_date
          ownerinfo
          parent_collection
          provenance
          relation
          rights_holder
          rights
          source
          spatial
          start_date
          subject
          thumbnail_path
          title
          visibility
          createdAt
          updatedAt
          collectionCollectionmapId
        }
        createdAt
        updatedAt
        collectionmapCollectionId
      }
      nextToken
    }
  }
`;
export const getPageContent = /* GraphQL */ `
  query GetPageContent($id: ID!) {
    getPageContent(id: $id) {
      page_content_category
      id
      content
      pageContentSiteId {
        analyticsID
        assetBasePath
        browseCollections
        contact
        displayedAttributes
        groups
        homePage
        id
        lang
        miradorOptions
        searchPage
        siteColor
        siteId
        siteName
        siteOptions
        sitePages
        siteTitle
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      pageContentPageContentSiteIdId
    }
  }
`;
export const listPageContents = /* GraphQL */ `
  query ListPageContents(
    $filter: ModelPageContentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPageContents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        page_content_category
        id
        content
        pageContentSiteId {
          analyticsID
          assetBasePath
          browseCollections
          contact
          displayedAttributes
          groups
          homePage
          id
          lang
          miradorOptions
          searchPage
          siteColor
          siteId
          siteName
          siteOptions
          sitePages
          siteTitle
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        pageContentPageContentSiteIdId
      }
      nextToken
    }
  }
`;
export const getArchive = /* GraphQL */ `
  query GetArchive($id: ID!) {
    getArchive(id: $id) {
      alternative
      archiveOptions
      basis_of_record
      bibliographic_citation
      conforms_to
      contributor
      coverage
      create_date
      created
      creator
      custom_key
      date
      description
      display_date
      end_date
      explicit
      extent
      format
      has_format
      has_part
      has_version
      heirarchy_path
      id
      identifier
      is_format_of
      is_part_of
      is_version_of
      item_category
      language
      license
      manifest_file_characterization
      manifest_url
      medium
      modified_date
      other_identifier
      parent_collection
      provenance
      publisher
      references
      relation
      repository
      rights_holder
      rights
      source
      spatial
      start_date
      subject
      tags
      temporal
      thumbnail_path
      title
      type
      visibility
      collection {
        bibliographic_citation
        collection_category
        collectionmap_id
        collectionOptions
        create_date
        creator
        custom_key
        description
        display_date
        end_date
        explicit_content
        heirarchy_path
        id
        identifier
        is_part_of
        language
        modified_date
        ownerinfo
        parent_collection
        provenance
        relation
        rights_holder
        rights
        source
        spatial
        start_date
        subject
        thumbnail_path
        title
        visibility
        collectionmap {
          collectionmap_category
          collection_id
          create_date
          id
          map_object
          modified_date
          createdAt
          updatedAt
          collectionmapCollectionId
        }
        archives {
          nextToken
        }
        createdAt
        updatedAt
        collectionCollectionmapId
      }
      createdAt
      updatedAt
      collectionArchivesId
      archiveCollectionId
    }
  }
`;
export const listArchives = /* GraphQL */ `
  query ListArchives(
    $filter: ModelArchiveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArchives(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        alternative
        archiveOptions
        basis_of_record
        bibliographic_citation
        conforms_to
        contributor
        coverage
        create_date
        created
        creator
        custom_key
        date
        description
        display_date
        end_date
        explicit
        extent
        format
        has_format
        has_part
        has_version
        heirarchy_path
        id
        identifier
        is_format_of
        is_part_of
        is_version_of
        item_category
        language
        license
        manifest_file_characterization
        manifest_url
        medium
        modified_date
        other_identifier
        parent_collection
        provenance
        publisher
        references
        relation
        repository
        rights_holder
        rights
        source
        spatial
        start_date
        subject
        tags
        temporal
        thumbnail_path
        title
        type
        visibility
        collection {
          bibliographic_citation
          collection_category
          collectionmap_id
          collectionOptions
          create_date
          creator
          custom_key
          description
          display_date
          end_date
          explicit_content
          heirarchy_path
          id
          identifier
          is_part_of
          language
          modified_date
          ownerinfo
          parent_collection
          provenance
          relation
          rights_holder
          rights
          source
          spatial
          start_date
          subject
          thumbnail_path
          title
          visibility
          createdAt
          updatedAt
          collectionCollectionmapId
        }
        createdAt
        updatedAt
        collectionArchivesId
        archiveCollectionId
      }
      nextToken
    }
  }
`;
export const archiveByIdentifier = /* GraphQL */ `
  query ArchiveByIdentifier(
    $identifier: String!
    $sortDirection: ModelSortDirection
    $filter: ModelArchiveFilterInput
    $limit: Int
    $nextToken: String
  ) {
    archiveByIdentifier(
      identifier: $identifier
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        alternative
        archiveOptions
        basis_of_record
        bibliographic_citation
        conforms_to
        contributor
        coverage
        create_date
        created
        creator
        custom_key
        date
        description
        display_date
        end_date
        explicit
        extent
        format
        has_format
        has_part
        has_version
        heirarchy_path
        id
        identifier
        is_format_of
        is_part_of
        is_version_of
        item_category
        language
        license
        manifest_file_characterization
        manifest_url
        medium
        modified_date
        other_identifier
        parent_collection
        provenance
        publisher
        references
        relation
        repository
        rights_holder
        rights
        source
        spatial
        start_date
        subject
        tags
        temporal
        thumbnail_path
        title
        type
        visibility
        collection {
          bibliographic_citation
          collection_category
          collectionmap_id
          collectionOptions
          create_date
          creator
          custom_key
          description
          display_date
          end_date
          explicit_content
          heirarchy_path
          id
          identifier
          is_part_of
          language
          modified_date
          ownerinfo
          parent_collection
          provenance
          relation
          rights_holder
          rights
          source
          spatial
          start_date
          subject
          thumbnail_path
          title
          visibility
          createdAt
          updatedAt
          collectionCollectionmapId
        }
        createdAt
        updatedAt
        collectionArchivesId
        archiveCollectionId
      }
      nextToken
    }
  }
`;
export const searchArchives = /* GraphQL */ `
  query SearchArchives(
    $filter: SearchableArchiveFilterInput
    $sort: [SearchableArchiveSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableArchiveAggregationInput]
  ) {
    searchArchives(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        alternative
        archiveOptions
        basis_of_record
        bibliographic_citation
        conforms_to
        contributor
        coverage
        create_date
        created
        creator
        custom_key
        date
        description
        display_date
        end_date
        explicit
        extent
        format
        has_format
        has_part
        has_version
        heirarchy_path
        id
        identifier
        is_format_of
        is_part_of
        is_version_of
        item_category
        language
        license
        manifest_file_characterization
        manifest_url
        medium
        modified_date
        other_identifier
        parent_collection
        provenance
        publisher
        references
        relation
        repository
        rights_holder
        rights
        source
        spatial
        start_date
        subject
        tags
        temporal
        thumbnail_path
        title
        type
        visibility
        collection {
          bibliographic_citation
          collection_category
          collectionmap_id
          collectionOptions
          create_date
          creator
          custom_key
          description
          display_date
          end_date
          explicit_content
          heirarchy_path
          id
          identifier
          is_part_of
          language
          modified_date
          ownerinfo
          parent_collection
          provenance
          relation
          rights_holder
          rights
          source
          spatial
          start_date
          subject
          thumbnail_path
          title
          visibility
          createdAt
          updatedAt
          collectionCollectionmapId
        }
        createdAt
        updatedAt
        collectionArchivesId
        archiveCollectionId
      }
      nextToken
      total
    }
  }
`;
export const getEmbargo = /* GraphQL */ `
  query GetEmbargo($id: ID!) {
    getEmbargo(id: $id) {
      id
      identifier
      start_date
      end_date
      note
      record_type
      createdAt
      updatedAt
    }
  }
`;
export const listEmbargos = /* GraphQL */ `
  query ListEmbargos(
    $filter: ModelEmbargoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmbargos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        identifier
        start_date
        end_date
        note
        record_type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSite = /* GraphQL */ `
  query GetSite($id: ID!) {
    getSite(id: $id) {
      analyticsID
      assetBasePath
      browseCollections
      contact
      displayedAttributes
      groups
      homePage
      id
      lang
      miradorOptions
      searchPage
      siteColor
      siteId
      siteName
      siteOptions
      sitePages
      siteTitle
      createdAt
      updatedAt
    }
  }
`;
export const listSites = /* GraphQL */ `
  query ListSites(
    $filter: ModelSiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSites(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        analyticsID
        assetBasePath
        browseCollections
        contact
        displayedAttributes
        groups
        homePage
        id
        lang
        miradorOptions
        searchPage
        siteColor
        siteId
        siteName
        siteOptions
        sitePages
        siteTitle
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const siteBySiteId = /* GraphQL */ `
  query SiteBySiteId(
    $siteId: String!
    $sortDirection: ModelSortDirection
    $filter: ModelSiteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    siteBySiteId(
      siteId: $siteId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        analyticsID
        assetBasePath
        browseCollections
        contact
        displayedAttributes
        groups
        homePage
        id
        lang
        miradorOptions
        searchPage
        siteColor
        siteId
        siteName
        siteOptions
        sitePages
        siteTitle
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHistory = /* GraphQL */ `
  query GetHistory($id: ID!) {
    getHistory(id: $id) {
      event
      groups
      id
      siteID
      userEmail
      createdAt
      updatedAt
    }
  }
`;
export const listHistories = /* GraphQL */ `
  query ListHistories(
    $filter: ModelHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        event
        groups
        id
        siteID
        userEmail
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
