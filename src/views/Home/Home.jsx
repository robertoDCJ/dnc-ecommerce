import './index.scss';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Search from '../../components/Search/Search';
import ProductCard from '../../components/ProductsCard/ProductCard';


const Home = ({ data }) => {
    return (
        <div className='home'>
            <HeaderMenu />
            <Search />

            <div className="home__products">
                {
                    data.map(product => (<ProductCard key={product.id} data={product} />))
                }
            </div>

            
        </div>
    )
}

export default Home