export type EmptyObject = Record<string, never>

export interface Review {
  '@context': string
  '@id': string
  '@type': string
  'body': string
}

export interface Book {
  '@context': string
  '@id': string
  '@type': string
  'isbn': string
  'title': string
  'description': string
  'author': string
  'publicationDate': string | Date
  'published'?: string
  'reviews': Array<Review>
}

export interface BookCollection {
  '@context': '/contexts/Book'
  '@id': '/books'
  '@type': 'hydra:Collection'
  'hydra:totalItems': number
  'hydra:member': Array<Book>
  'hydra:view': any
  'hydra:search': any
}
