import S from '@sanity/desk-tool/structure-builder'
import { MdMenu } from 'react-icons/lib/md'
import { GoBrowser as PageIcon, GoHome, GoSettings, GoQuestion } from 'react-icons/lib/go'
import blog from './src/structure/blog'
import landingPages from './src/structure/landingPages'
import PreviewIFrame from './src/components/previewIFrame'

const hiddenDocTypes = listItem =>
  !['route', 'navigationMenu', 'post', 'page', 'siteSettings', 'author', 'category', 'quiz'].includes(
    listItem.getId()
  )

export default () =>
  S.list()
    .title('Content')
    .items([
      S.documentListItem()
        .schemaType('siteSettings')
        .title('Site settings')
        .icon(GoSettings)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .views([S.view.form(), PreviewIFrame()])
        ),
      S.documentListItem()
        .title('Frontpage')
        .schemaType('page')
        .icon(GoHome)
        .child(
          S.document()
            .schemaType('page')
            .documentId('frontpage')
            .views([S.view.form(), PreviewIFrame()])
        ),
      S.documentListItem()
        .title('Quiz')
        .schemaType('quiz')
        .icon(GoQuestion)
        .child(
          S.document()
            .schemaType('quiz')
            .documentId('quiz')
            .views([S.view.form(), PreviewIFrame()])
        ),
      // blog,
      landingPages,
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
