import Avatar from './Avatar'
import CoverImage from './CoverImage'
import CustomLink from './CustomLink'
import DateFormatter from './DateFormatter'
import IAuthor from '../types/author'

type Props = {
  slug: string
  title: string
  description: string
  publishDate: string
  updateDate?: string
  author: IAuthor
  coverImage: string
}

const HeroPost: React.FC<Props> = ({
  slug,
  title,
  description,
  publishDate,
  updateDate,
  author,
  coverImage,
}: Props) => {
  return (
    <section>
      <h2 className='mb-8 text-4xl font-bold leading-tight tracking-tight md:text-6xl dark:text-gray-100'>
        Latest Post
      </h2>

      <div className='flex flex-col mb-16 xl:flex-row'>
        <div className='mb-8 xl:w-3/5 xl:mb-0 xl:mr-16'>
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>

        <div className='xl:w-2/5 lg:flex xl:block'>
          <h3 className='mb-4 text-4xl leading-tight lg:text-5xl dark:text-gray-100'>
            <CustomLink href={`/writings/${slug}`}>{title}</CustomLink>
          </h3>

          <div>
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
        </div>
      </div>
    </section>
  )
}

export default HeroPost
