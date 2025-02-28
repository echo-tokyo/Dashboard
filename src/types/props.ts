import { Test } from './api'

export interface IPropsInput {
  setHandleChange: (value: string) => void
  handleChange: string
  testsCount: number
}

export interface IPropsNoResults {
  handleChangeReset: () => void
}

export interface IPropsSort {
  setSortByField: (field: 'name' | 'type' | 'siteName' | 'status') => void
}

export interface usePropsFilter {
  handleChange: string
  tests: Test[]
}

export interface UsePropsFilter {
  filteredData: Test[]
}
