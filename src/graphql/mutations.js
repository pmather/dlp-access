/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCollection = /* GraphQL */ `
  mutation CreateCollection(
    $input: CreateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    createCollection(input: $input, condition: $condition) {
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
export const updateCollection = /* GraphQL */ `
  mutation UpdateCollection(
    $input: UpdateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    updateCollection(input: $input, condition: $condition) {
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
export const deleteCollection = /* GraphQL */ `
  mutation DeleteCollection(
    $input: DeleteCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    deleteCollection(input: $input, condition: $condition) {
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
export const createCollectionmap = /* GraphQL */ `
  mutation CreateCollectionmap(
    $input: CreateCollectionmapInput!
    $condition: ModelCollectionmapConditionInput
  ) {
    createCollectionmap(input: $input, condition: $condition) {
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
export const updateCollectionmap = /* GraphQL */ `
  mutation UpdateCollectionmap(
    $input: UpdateCollectionmapInput!
    $condition: ModelCollectionmapConditionInput
  ) {
    updateCollectionmap(input: $input, condition: $condition) {
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
export const deleteCollectionmap = /* GraphQL */ `
  mutation DeleteCollectionmap(
    $input: DeleteCollectionmapInput!
    $condition: ModelCollectionmapConditionInput
  ) {
    deleteCollectionmap(input: $input, condition: $condition) {
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
export const createPageContent = /* GraphQL */ `
  mutation CreatePageContent(
    $input: CreatePageContentInput!
    $condition: ModelPageContentConditionInput
  ) {
    createPageContent(input: $input, condition: $condition) {
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
export const updatePageContent = /* GraphQL */ `
  mutation UpdatePageContent(
    $input: UpdatePageContentInput!
    $condition: ModelPageContentConditionInput
  ) {
    updatePageContent(input: $input, condition: $condition) {
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
export const deletePageContent = /* GraphQL */ `
  mutation DeletePageContent(
    $input: DeletePageContentInput!
    $condition: ModelPageContentConditionInput
  ) {
    deletePageContent(input: $input, condition: $condition) {
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
export const createArchive = /* GraphQL */ `
  mutation CreateArchive(
    $input: CreateArchiveInput!
    $condition: ModelArchiveConditionInput
  ) {
    createArchive(input: $input, condition: $condition) {
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
export const updateArchive = /* GraphQL */ `
  mutation UpdateArchive(
    $input: UpdateArchiveInput!
    $condition: ModelArchiveConditionInput
  ) {
    updateArchive(input: $input, condition: $condition) {
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
export const deleteArchive = /* GraphQL */ `
  mutation DeleteArchive(
    $input: DeleteArchiveInput!
    $condition: ModelArchiveConditionInput
  ) {
    deleteArchive(input: $input, condition: $condition) {
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
export const createEmbargo = /* GraphQL */ `
  mutation CreateEmbargo(
    $input: CreateEmbargoInput!
    $condition: ModelEmbargoConditionInput
  ) {
    createEmbargo(input: $input, condition: $condition) {
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
export const updateEmbargo = /* GraphQL */ `
  mutation UpdateEmbargo(
    $input: UpdateEmbargoInput!
    $condition: ModelEmbargoConditionInput
  ) {
    updateEmbargo(input: $input, condition: $condition) {
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
export const deleteEmbargo = /* GraphQL */ `
  mutation DeleteEmbargo(
    $input: DeleteEmbargoInput!
    $condition: ModelEmbargoConditionInput
  ) {
    deleteEmbargo(input: $input, condition: $condition) {
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
export const createSite = /* GraphQL */ `
  mutation CreateSite(
    $input: CreateSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    createSite(input: $input, condition: $condition) {
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
export const updateSite = /* GraphQL */ `
  mutation UpdateSite(
    $input: UpdateSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    updateSite(input: $input, condition: $condition) {
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
export const deleteSite = /* GraphQL */ `
  mutation DeleteSite(
    $input: DeleteSiteInput!
    $condition: ModelSiteConditionInput
  ) {
    deleteSite(input: $input, condition: $condition) {
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
export const createHistory = /* GraphQL */ `
  mutation CreateHistory(
    $input: CreateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    createHistory(input: $input, condition: $condition) {
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
export const updateHistory = /* GraphQL */ `
  mutation UpdateHistory(
    $input: UpdateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    updateHistory(input: $input, condition: $condition) {
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
export const deleteHistory = /* GraphQL */ `
  mutation DeleteHistory(
    $input: DeleteHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    deleteHistory(input: $input, condition: $condition) {
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
