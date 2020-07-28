module.exports = {
  $schema: 'http://json-schema.org/draft-04/schema#',
  title: 'Block List',
  type: 'object',
  require: ['items'],
  properties: {
    attributes: {
      type: 'object',
      description:
        'A Drupal-style attributes object with extra attributes to append to this component.',
    },
    items: {
      type: 'array',
      title: 'The content items',
      description:
        'All of the items in the block list - can have simple text **or** `items`',
      items: {
        type: ['string', 'object', 'array'],
        description:
          'Renderable content (i.e. a string, render array, or included pattern) for a single list item',
      },
    },
  },
};
