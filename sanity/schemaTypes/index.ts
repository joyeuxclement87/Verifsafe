import { type SchemaTypeDefinition } from 'sanity'
import gallery from './gallery'
import contactMessage from './contactMessage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [gallery, contactMessage],
}
