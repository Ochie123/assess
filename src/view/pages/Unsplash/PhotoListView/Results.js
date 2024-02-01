import React, { useState, useEffect } from "react"
import clsx from "clsx"
import PerfectScrollbar from "react-perfect-scrollbar"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import Table from "@mui/joy/Table"


import { Link } from "react-router-dom"
import {
  ArrowRight as ArrowRightIcon,
  Search as SearchIcon
} from "react-feather"
import {
  Box,
  Card,
  InputAdornment,
  IconButton,
  SvgIcon,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material"

import {
  tagOptions,
  sortOptions,

} from "../../../../others/helpers/InputPhotoOptions"
import { applyFilters } from "./TableResultsHelpers"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
}

const Results = ({ className, results, result, ...rest }) => {
  const [open, setOpen] = React.useState(false)

  const [selectedResults, setSelectedResults] = useState([])
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(25)
  const [query, setQuery] = useState("")
  const [sort, setSort] = useState(sortOptions[0].value)
  const [resultLikesSortOrder, setResultLikesSortOrder] = useState("desc")

  const [sortOrder, setSortOrder] = useState("desc")
  const [filters, setFilters] = useState({
    tag: null,
    has_location: null
  })
  const handleSortByLikes = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc"
    setSortOrder(newSortOrder)
  }

  const handleQueryChange = event => {
    event.persist()
    setQuery(event.target.value)
  }

  const handleTagChange = event => {
    event.persist()

    let value = null

    if (event.target.value !== "all") {
      value = event.target.value
    }

    setFilters(prevFilters => ({
      ...prevFilters,
      tag: value
    }))
  }

  const handleSortChange = event => {
    event.persist()
    setSort(event.target.value)
  }
  const handlePageChange = (event, newPage) => {
    setPage(newPage)
  }

  const handleLimitChange = event => {
    setLimit(parseInt(event.target.value))
  }

  const applyPagination = (results, page, limit) => {
    const startIndex = page * limit
    const endIndex = startIndex + limit
    return results.slice(startIndex, endIndex)
  }
  
  const filteredResults = applyFilters(results, query, filters)
  const paginatedResults = applyPagination(filteredResults, page, limit)

  const sortedResults = [...paginatedResults].sort((a, b) => {

   
  })
  return (
    <Card className={clsx("", className)} {...rest}>
      <Box p={2}>
        <Box display="flex" alignItems="center">
          <TextField
            className=""
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon fontSize="small" color="action">
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              )
            }}
            onChange={handleQueryChange}
            placeholder="Search photographers"
            value={query}
            variant="outlined"
          />
          <Box flexGrow={1} />
          <TextField
            label="Sort By"
            name="sort"
            onChange={handleSortChange}
            select
            SelectProps={{ native: true }}
            value={sort}
            variant="outlined"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </Box>
        <Box mt={3} display="flex" alignItems="center">
          <TextField
            className=""
            label="Tags"
            name="tag"
            onChange={handleTagChange}
            select
            SelectProps={{ native: true }}
            value={filters.tag || "all"}
            variant="outlined"
          >
            {tagOptions.map(tagOption => (
              <option key={tagOption.id} value={tagOption.id}>
                {tagOption.name}
              </option>
            ))}
          </TextField>
        </Box>
      </Box>

      <PerfectScrollbar>
        <Box minWidth={1200}>
          <Table color="danger">
            <TableHead>
              <TableRow>
                <TableCell>Photgrapher Name</TableCell>
                <TableCell>Created at</TableCell>
               
                <TableCell>Photographer Portfolio</TableCell>
                <TableCell onClick={'handleSortByLikes'}>
                  No. of likes{" "}
                  {resultLikesSortOrder === "desc" ? (
                    <ArrowDownwardIcon />
                  ) : (
                    <ArrowUpwardIcon />
                  )}
                </TableCell>
                <TableCell align="right">Photo Detail</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedResults
                .map(result => {
                  return (
                    <TableRow key={result.id}>
                      <TableCell className="">{result.user.name}</TableCell>
                      <TableCell>
                        {new Date(result.created_at).toLocaleString()}
                      </TableCell>
            
                    
                      <TableCell>
                      <a
                      href={result.user.links.html}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                     View Photographer's Portfolio
                    </a>
                      </TableCell>
                      <TableCell>
                        {result.likes} likes
                      </TableCell>

                      <TableCell>
                        <IconButton>
                          <Link to={`/photos/${result.id}`}>
                            
                            <ArrowRightIcon />
                          </Link>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
          <TablePagination
            component="div"
            count={filteredResults.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25]}
          />
        </Box>
      </PerfectScrollbar>
    </Card>
  )
}

export default Results