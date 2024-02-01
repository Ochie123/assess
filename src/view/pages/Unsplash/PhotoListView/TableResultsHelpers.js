import React from "react"
import Label from '../../../../components/Label'

export const applyFilters = (results, query, filters) => {
  return results.filter(result => {
    let matches = true

    if (query && !result.user.name.toLowerCase().includes(query.toLowerCase())) {
      matches = false
    }

    if (filters.category && result.category !== filters.category) {
      matches = false
    }
    return matches
  })
}

export const applyPagination = (results, page, limit) => {
  return results.slice(page * limit, page * limit + limit)
}

export const getInventoryLabel = inventoryType => {
  const map = {
    in_stock: {
      text: "In Stock",
      color: "success"
    },
    limited: {
      text: "Limited",
      color: "warning"
    },
    out_of_stock: {
      text: "Out of Stock",
      color: "error"
    }
  }

  const { text, color } = map[inventoryType]

  return <Label color={color}>{text}</Label>
}
