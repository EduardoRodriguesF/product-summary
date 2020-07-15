import React from 'react'
import { useProductSummary } from 'vtex.product-summary-context/ProductSummaryContext'
import BaseSpecificationBadges from 'vtex.product-specification-badges/BaseSpecificationBadges'

const ProductSummarySpecificationBadges = ({
  specificationGroupName,
  visibleWhen,
  specificationsOptions,
  specificationName,
  displayValue,
  orientation,
}) => {
  const { product } = useProductSummary()

  return (
    <BaseSpecificationBadges
      product={product}
      visibleWhen={visibleWhen}
      specificationsOptions={specificationsOptions}
      specificationName={specificationName}
      displayValue={displayValue}
      orientation={orientation}
      specificationGroupName={specificationGroupName}
    />
  )
}

ProductSummarySpecificationBadges.schema = {
  ...BaseSpecificationBadges.schema,
  title: 'admin/editor.product-summary-specification-badges.title',
}

export default ProductSummarySpecificationBadges
