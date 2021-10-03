import Avatar from './Avatar'
import CoverImage from './CoverImage'
import CustomLink from './CustomLink'
import DateFormatter from './DateFormatter'
import IAuthor from 'types/author'

type Props = {
  slug: string
  title: string
  description: string
  publishDate: string
  updateDate?: string
  author: IAuthor
  coverImage: string
}

const PostPreview: React.FC<Props> = ({
  slug,
  title,
  description,
  publishDate,
  updateDate,
  author,
  coverImage,
}: Props) => {
  return (
    <div>
      <div className='mb-4'>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>

      <h3 className='mb-2 text-4xl leading-snug dark:text-gray-100'>
        <CustomLink href={`/writings/${slug}`}>{title}</CustomLink>
      </h3>

      <div className='mb-4 text-gray-500'>
        {updateDate ? (
          <>
            <DateFormatter dateString={publishDate} /> · Updated{' '}
            <DateFormatter dateString={updateDate} />
          </>
        ) : (
          <DateFormatter dateString={publishDate} />
        )}
      </div>

      <p className='mb-4 text-lg leading-relaxed dark:text-gray-300'>
        {description}
      </p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}

export default PostPreview
