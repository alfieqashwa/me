import Image from 'next/image'

import CustomLink from './CustomLink'

type Props = {
  title: string
  src: string
  slug?: string
}

const CoverImage: React.FC<Props> = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      className='object-cover'
      src={src}
      alt={`Cover Image for ${title}`}
      width={1280}
      height={720}
    />
  )
  return (
    <>
      {slug ? (
        <CustomLink href={`/writings/${slug}`} aria-label={title}>
          {image}
        </CustomLink>
      ) : (
        image
      )}
    </>
  )
}

export default CoverImage
