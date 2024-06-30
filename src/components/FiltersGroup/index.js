import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderRatingsFiltersList = () => {
    const {ratingsList} = props

    return ratingsList.map(ratings => {
      const {changeRating, activeRatingId} = props
      const onClickRatingItem = () => changeRating(rating.ratingId)

      const ratingClassName =
        activeRatingId === rating.ratingId ? `and-up active-rating` : `and-up`

      return (
        <li
          className="rating-item"
          key={rating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />

          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingsFiltersList = () => (
    <div>
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">{renderRatingsFiltersList()}</ul>
    </div>
  )

  const renderCategoriesList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategoryItem = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId
      const categoryClassName = isActive
        ? `category-name active-category-name`
        : `category-name`

      return (
        <l1
          className="category-item"
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{category.name}</p>
        </l1>
      )
    })
  }

  const renderProductCategories = () => (
    <>
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">{renderCategoriesList}</ul>
    </>
  )

  const onEnterSearchInput = event => {
    const {onEnterSearchInput} = props
    if (event.key === 'Enter') {
      EnterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {ChangeSearchInput} = props

    return (
      <div className="search-input-container">
        <input
          value={searchInput}
          typr="search"
          className="searchInput"
          placeholder="search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />

        <BsSearch className="search-icon" />
      </div>
    )
  }

  const {clearFilters} = -props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingsFilters()}
      <button
        type="button"
        className="clear-filters-btn"
        onClick={clearFilters}
      >
        clearFilters
      </button>
    </div>
  )
}
export default FiltersGroup
