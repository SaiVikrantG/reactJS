import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import FiltersGroup from '../FiltersGroup'
import ProductCard from '../ProductCard'
import ProductsHeader from '../ProductsHeader'

import './index.css'

const LoadOptions = {
  load: 'LOADING',
  done: 'LOADED',
  fail: 'FAILED',
}

const categoryOptions = [
  {
    name: 'Clothing',
    categoryId: '1',
  },
  {
    name: 'Electronics',
    categoryId: '2',
  },
  {
    name: 'Appliances',
    categoryId: '3',
  },
  {
    name: 'Grocery',
    categoryId: '4',
  },
  {
    name: 'Toys',
    categoryId: '5',
  },
]

const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
]

class AllProductsSection extends Component {
  state = {
    productsList: [],
    isLoading: LoadOptions.done,
    activeOptionId: sortbyOptions[0].optionId,
    categoryId: '',
    searchKey: '',
    rating: '',
  }

  componentDidMount() {
    this.getProducts()
  }

  changeCategoryId = id => {
    this.setState({categoryId: id}, this.getProducts)
  }

  changeRatingId = id => {
    this.setState({rating: id}, this.getProducts)
  }

  changeSearch = value => {
    this.setState({searchKey: value})
  }

  clear = () => {
    this.setState({rating: '', categoryId: '', searchKey: ''}, this.getProducts)
  }

  search = () => {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      isLoading: LoadOptions.load,
    })
    const jwtToken = Cookies.get('jwt_token')

    const {activeOptionId, categoryId, searchKey, rating} = this.state
    const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${categoryId}&title_search=${searchKey}&rating=${rating}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      this.setState({
        productsList: updatedData,
        isLoading: LoadOptions.done,
      })
    } else {
      this.setState({
        productsList: [],
        isLoading: LoadOptions.fail,
      })
    }
  }

  changeSortby = activeOptionId => {
    this.setState({activeOptionId}, this.getProducts)
  }

  renderProductsList = () => {
    const {productsList, activeOptionId} = this.state

    const display =
      productsList.length === 0 ? (
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
          alt="no products"
        />
      ) : (
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      )

    return (
      <div className="all-products-container">
        <ProductsHeader
          activeOptionId={activeOptionId}
          sortbyOptions={sortbyOptions}
          changeSortby={this.changeSortby}
        />
        {display}
      </div>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderFail = () => (
    <div className="products-fail">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="products failure"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  )

  // TODO: Add failure view

  render() {
    const {isLoading, categoryId, rating, searchKey} = this.state
    let display

    if (isLoading === LoadOptions.load) {
      display = this.renderLoader()
    } else if (isLoading === LoadOptions.done) {
      display = this.renderProductsList()
    } else {
      display = this.renderFail()
    }

    return (
      <div className="all-products-section">
        <FiltersGroup
          categoryId={categoryId}
          changeCategoryId={this.changeCategoryId}
          categoryList={categoryOptions}
          ratingsList={ratingsList}
          activeRating={rating}
          changeRating={this.changeRatingId}
          clear={this.clear}
          changeSearch={this.changeSearch}
          searchKey={searchKey}
          search={this.search}
        />

        {display}
      </div>
    )
  }
}

export default AllProductsSection
