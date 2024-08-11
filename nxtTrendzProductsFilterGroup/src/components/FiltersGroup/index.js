import {BsSearch} from 'react-icons/bs'
import CategoryOption from '../CategoryOption'
import RatingOption from '../RatingOption'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryList,
    categoryId,
    changeCategoryId,
    ratingsList,
    activeRating,
    changeRating,
    clear,
    changeSearch,
    searchKey,
    search,
  } = props

  const change = event => {
    changeSearch(event.target.value)
  }

  const enterPressed = event => {
    if (event.key === 'Enter') {
      search()
    }
  }

  return (
    <div className="filters-group-container">
      <div className="search-bar-icon">
        <input
          placeholder="Search"
          value={searchKey}
          type="search"
          onChange={change}
          className="search-bar"
          onKeyDown={enterPressed}
        />
        <BsSearch className="sort-by-icon" />
      </div>

      <h3>Category</h3>
      <ul className="categoryOptions">
        {categoryList.map(each => (
          <CategoryOption
            key={each.categoryId}
            activeId={categoryId}
            details={each}
            change={changeCategoryId}
          />
        ))}
      </ul>

      <h3>Rating</h3>
      <ul className="categoryOptions">
        {ratingsList.map(each => (
          <RatingOption
            key={each.ratingId}
            activeId={activeRating}
            details={each}
            change={changeRating}
          />
        ))}
      </ul>

      <button type="button" onClick={clear} className="clearFilters">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
