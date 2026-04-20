import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Verifsafe CMS')
    .items([
      S.listItem()
        .title('Gallery Projects')
        .child(S.documentTypeList('gallery').title('Gallery Projects')),
    ])
