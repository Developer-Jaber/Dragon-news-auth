import { Link, useLoaderData } from 'react-router-dom'
import RightNav from '../components/layout-component/RightNav'
import Header from '../components/Header'
import { BsArrowUpLeft } from 'react-icons/bs'

const NewsDetails = () => {
  const data = useLoaderData()
  const news = data.data[0]
  return (
    <div className='mx-auto w-11/12'>
      <header>
        <Header></Header>
      </header>
      <main className='gap-4 grid grid-cols-12 mx-auto w-11/12'>
        <section className='col-span-9'>
          <h1 className='ml-3 font-bold text-xl'>Dragon News</h1>
          <div className='bg-base-100 shadow-xl w-full card'>
            <figure className='px-10 pt-10'>
              <img
                src={news?.image_url}
                alt='Shoes'
              />
            </figure>
            <div className='items-center p-10'>
              <h2 className='card-title'>{news.title}</h2>
              <p className='py-5'>{news.details}</p>
              <div className='my-10 card-actions'>
                <Link to='/' className='bg-pink-600 px-20 rounded-none text-white btn'><BsArrowUpLeft></BsArrowUpLeft> All news in this category</Link>
              </div>
            </div>
          </div>
        </section>
        <section className='col-span-3'>
          <RightNav></RightNav>
        </section>
      </main>
    </div>
  )
}

export default NewsDetails
