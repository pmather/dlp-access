export const available_attributes = {
  archive: [
    "identifier",
    "belongs_to",
    "bibliographic_citation",
    "creator",
    "custom_key",
    "description",
    "format",
    "language",
    "location",
    "medium",
    "resource_type",
    "related_url",
    "rights_holder",
    "rights_statement",
    "source",
    "start_date",
    "tags"
  ],
  collection: [
    "size",
    "creator",
    "description",
    "rights_statement",
    "date",
    "subject",
    "language",
    "identifier",
    "bibliographic_citation",
    "rights_holder",
    "related_url"
  ]
};

export const archive_multiFields = [
  "belongs_to",
  "contributor",
  "creator",
  "description",
  "format",
  "language",
  "location",
  "medium",
  "provenance",
  "reference",
  "repository",
  "resource_type",
  "related_url",
  "source",
  "subject",
  "tags"
];

export const archive_singleFields = [
  "bibliographic_citation",
  "collection",
  "display_date",
  "manifest_url",
  "rights_holder",
  "rights_statement",
  "title",
  "thumbnail_path"
];

export const collection_multiFields = [
  "belongs_to",
  "creator",
  "description",
  "language",
  "location",
  "provenance",
  "related_url",
  "source",
  "subject"
];

export const collection_singleFields = [
  "bibliographic_citation",
  "circa",
  "display_date",
  "end_date",
  "ownerinfo_email",
  "ownerinfo_name",
  "rights_holder",
  "rights_statement",
  "start_date",
  "title",
  "thumbnail_path"
];
